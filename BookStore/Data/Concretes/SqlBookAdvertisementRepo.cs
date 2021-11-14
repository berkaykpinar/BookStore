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

        public IEnumerable<BookAdvertisement> GetAwaitingAds()
        {
            return _appDbContext.BookAdvertisements.ToList().Where(x => x.IsApproved == false);
        }

        public void CreateBookAdvertisement(BookAdvertisement bookAdvertisement)
        {
            if (bookAdvertisement == null)
            {
                throw new ArgumentNullException("member is null");
            }

            bookAdvertisement.AdStatus = true;
            bookAdvertisement.IsApproved = false;
           
            _appDbContext.BookAdvertisements.Add(bookAdvertisement);
        }

        public IEnumerable<BookAdvertisement> GetAllBookAdvertisements()
        {
            return _appDbContext.BookAdvertisements.ToList().Where(x => x.AdStatus == true && x.IsApproved== true );
        }

        public BookAdvertisement GetBookAdvertisementById(int id)
        {
            return _appDbContext.BookAdvertisements.FirstOrDefault(m => m.BookAdvertisementId == id);
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges() > 0);
        }

        public void UpdateBookAdvertisement(BookAdvertisement bookAdvertisement)
        {
            //nothing. Just intuitive
        }

        public IEnumerable<BookAdvertisement> GetBookAdsByMemberId(int memberId)
        {
            
            return _appDbContext.BookAdvertisements.ToList().Where(x => x.MemberId==memberId);
        }

        public void DeleteAdvertisement(BookAdvertisement advertisement)
        {
            if (advertisement == null)
            {
                throw new ArgumentException(nameof(advertisement));
            }

            _appDbContext.BookAdvertisements.Remove(advertisement);
        }
    }
}
