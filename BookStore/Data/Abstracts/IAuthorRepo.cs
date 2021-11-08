using System.Collections.Generic;
using BookStore.Models;

namespace BookStore.Data.Abstracts
{
    public interface IAuthorRepo
    {
        bool SaveChanges();

        Author GetAuthor(int id);

        IEnumerable<Author> GetallAuthors();

        void CreateAuthor(Author author);

        bool FindAuthorByName(string name);
    }
}
