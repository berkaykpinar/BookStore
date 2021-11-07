using System;
using BookStore.Models;
using System.Collections;
using System.Collections.Generic;

namespace BookStore.Data.Abstracts
{
    public interface IAdminRepo
    {
        bool SaveChanges();

        IEnumerable<Admin> GetAllAdmins();

        Admin GetAdmin(int id);

        void CreateAdmin(Admin admin);
    }
}
