using System;
using System.Collections.Generic;
using System.Linq;
using BookStore.Data.Abstracts;
using BookStore.Models;

namespace BookStore.Data.Concretes
{
    public class SqlAuthorRepo : IAuthorRepo
    {
        private readonly AppDbContext _context;

        public SqlAuthorRepo(AppDbContext context)
        {
            _context = context;
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public Author GetAuthor(int id)
        {
            return _context.Authors.FirstOrDefault(x => x.AuthorId == id);
        }

        public IEnumerable<Author> GetAllAuthors()
        {
            return _context.Authors.ToList();
        }

        public void CreateAuthor(Author author)
        {

            if (author == null)
            {
                throw new Exception("book is empty");
            }

            _context.Authors.Add(author);
        }

        public IEnumerable<Author> FindAuthorByName(string name)
        {
            return _context.Authors.ToList().Where(x => x.AuthorName.ToLower().Contains(name.ToLower()));
            
        }
    }
}
