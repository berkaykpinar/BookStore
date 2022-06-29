using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BookStore.Dtos.AdminDtos;
using BCryptNet = BCrypt.Net.BCrypt;
namespace BookStore.Data.Concretes
{
    public class SqlAdminRepo : IAdminRepo
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMapper _mapper;
        public SqlAdminRepo(AppDbContext appDbContext,IMapper mapper)
        {
            _appDbContext = appDbContext;
            _mapper=mapper;
        }

        public void CreateAdmin(Admin admin)
        {
            int saltRounds = 10;
            admin.UserType = "1";
            admin.Password = BCryptNet.HashPassword(admin.Password, saltRounds);

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

        public AdminReadDto Validate(string nickName,string password)
        {
            var admin = _appDbContext.Admins.FirstOrDefault(x => x.NickName == nickName);

            if (admin == null || !BCryptNet.Verify(password, admin.Password))
            {
                throw new ArgumentException("Username or password is incorrect");
                
            }

            return _mapper.Map<AdminReadDto>(admin);


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
