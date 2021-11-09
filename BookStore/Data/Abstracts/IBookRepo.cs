using System.Collections.Generic;
using BookStore.Models;

namespace BookStore.Data.Abstracts
{
    public interface IBookRepo
    {
        bool SaveChanges();

        Book GetBook(int id);

        IEnumerable<Book> GetallBooks();

        void CreateBook(Book book);

        IEnumerable<Book> FindBookByTitle(string title);

    }
}