using System.Collections.Generic;
using BookStore.Models;

namespace BookStore.Data.Abstracts
{
    public interface IAuthorRepo
    {
        bool SaveChanges();

        Author GetAuthor(int id);

        IEnumerable<Author> GetAllAuthors();

        void CreateAuthor(Author author);

        IEnumerable<Author> FindAuthorByName(string name);
    }
}
