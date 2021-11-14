using BookStore.Models;
using System.Collections.Generic;

namespace BookStore.Data.Abstracts
{
    public interface IBookAdvertisement
    {
        bool SaveChanges();

        public BookAdvertisement GetBookAdvertisementById(int id);

        IEnumerable<BookAdvertisement> GetAllBookAdvertisements();

        IEnumerable<BookAdvertisement> GetAwaitingAds();

        void CreateBookAdvertisement(BookAdvertisement bookAdvertisement);

        public void UpdateBookAdvertisement(BookAdvertisement bookAdvertisement);

        public IEnumerable<BookAdvertisement> GetBookAdsByMemberId(int  memberId);

        public void DeleteAdvertisement(BookAdvertisement advertisement);
    }
}
