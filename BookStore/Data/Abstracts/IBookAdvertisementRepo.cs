using BookStore.Models;
using System.Collections.Generic;

namespace BookStore.Data.Abstracts
{
    public interface IBookAdvertisement
    {
        bool SaveChanges();

        public BookAdvertisement GetBookAdvertisementById(int id);

        IEnumerable<BookAdvertisement> GetAllBookAdvertisements();

        void CreateBookAdvertisement(BookAdvertisement bookAdvertisement);

        public void UpdateBookAdvertisement(BookAdvertisement bookAdvertisement, int memberId);

        public IEnumerable<BookAdvertisement> GetBookAdsByMemberId(int  memberId);
    }
}
