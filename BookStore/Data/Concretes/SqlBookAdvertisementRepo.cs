using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace BookStore.Data.Concretes
{
    public class SqlBookAdvertisementRepo : IBookAdvertisement
    {
        private readonly AppDbContext _appDbContext;

        public SqlBookAdvertisementRepo(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void CreateBookAdvertisement(BookAdvertisement bookAdvertisement)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BookAdvertisement> GetAllBookAdvertisements()
        {
            return _appDbContext.BookAdvertisements.ToList();
        }

        public BookAdvertisement GetBookAdvertisementById(int id)
        {
            throw new NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateBookAdvertisement(BookAdvertisement bookAdvertisement, int memberId)
        {
            throw new NotImplementedException();
        }
    }
}
