using BookStore.Models;
using System.Collections;
using System.Collections.Generic;

namespace BookStore.Data.Abstracts
{
    public interface IContactInfoRepo
    {
        public bool SaveChanges();

        public ContactInfo GetContactInfo(int id);

        IEnumerable<ContactInfo> GetAllContactInfos();

        void CreateContactInfo(ContactInfo contactInfo);

        public void UpdateContactInfo(ContactInfo contact);
    }
}
