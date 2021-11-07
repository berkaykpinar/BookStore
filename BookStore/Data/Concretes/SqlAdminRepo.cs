using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Data.Concretes
{
    public class SqlAdminRepo : IAdminRepo
    {
        private readonly AppDbContext _appDbContext;

        public SqlAdminRepo(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void CreateAdmin(Admin admin)
        {

            if (admin == null)
            {
                throw new ArgumentNullException("member is null");
            }

            _appDbContext.Admins.Add(admin);
        }

        public IEnumerable<Admin> GetAllAdmins()
        {
            return _appDbContext.Admins.ToList();
        }

        public Admin GetAdmin(int id)
        {
            return _appDbContext.Admins.FirstOrDefault(m => m.Id == id);
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges() >= 0);
        }
    }
}
