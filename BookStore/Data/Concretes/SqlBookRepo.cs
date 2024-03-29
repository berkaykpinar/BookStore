using System;
using System.Collections.Generic;
using System.Linq;
using BookStore.Data.Abstracts;
using BookStore.Dtos.BookDtos;
using BookStore.Models;

namespace BookStore.Data.Concretes
{
    
    public class SqlBookRepo : IBookRepo
    {
        private readonly AppDbContext _context;

        public SqlBookRepo(AppDbContext context)
        {
            _context = context;
        }


        public bool SaveChanges()
        {
            return (_context.SaveChanges()>=0);
        }

        public Book GetBook(int id)
        {

            return _context.Books.FirstOrDefault(x => x.BookId == id);
        }

        public IEnumerable<Book> GetallBooks()
        {
            return _context.Books.ToList();
        }

        public void CreateBook(Book book)
        {
            if (book == null)
            {
                throw new Exception("book is empty");
            }
                
            _context.Books.Add(book);
        }

        public IEnumerable<Book> FindBookByTitle(string title)
        {
             return  _context.Books.ToList().Where(x => x.Title.ToLower().Contains(title.ToLower()));

             //return _context.Books.ToList().Exists(book => book.Title.ToLower().Contains(title.ToLower()));
        }
    }
}