using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Data.Concretes
{
    public class SqlContactInfoRepo : IContactInfoRepo
    {
        private readonly AppDbContext _appDbContext;

        public SqlContactInfoRepo(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void CreateContactInfo(ContactInfo contactInfo)
        {
            if (contactInfo == null)
            {
                throw new ArgumentNullException("member is null");
            }

            _appDbContext.ContactInfos.Add(contactInfo);
        }

        public IEnumerable<ContactInfo> GetAllContactInfos()
        {
            return _appDbContext.ContactInfos.ToList();
        }

        public ContactInfo GetContactInfo(int id)
        {
            return _appDbContext.ContactInfos.FirstOrDefault(x => x.ContactInfoId == id);
        }

        public void UpdateContactInfo(ContactInfo contact)
        {
            //nothing
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges()>= 0);
        }
    }
}
