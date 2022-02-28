using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BookStore.Dtos.MemberDtos;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using BCryptNet = BCrypt.Net.BCrypt;

namespace BookStore.Data.Concretes
{
    public class SqlMemberRepo : IMemberRepo
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMapper _mapper;


        public SqlMemberRepo(AppDbContext appDbContext, IMapper mapper)
        {
            _appDbContext= appDbContext;
            _mapper= mapper;
        }

        public async void CreateMember(Member member)
        {
            if (member == null)
            {
                throw new ArgumentNullException("member is null");
            }

            if (_appDbContext.Members.Any(x => x.NickName == member.NickName))
            {
                throw new ApplicationException("Username is already taken !");
            }

            int saltRounds = 10;
            member.UserType = "2";
            member.Score = 0;
            member.isEmailConfirmed = false;
            member.Password = BCryptNet.HashPassword(member.Password,saltRounds);

            _appDbContext.Members.Add(member);
        }

        public MemberReadDto Authenticate(string member, string password)
        {
            var user = _appDbContext.Members.FirstOrDefault(x => x.NickName == member);
            if (user == null || !BCryptNet.Verify(password,user.Password))
            {
                throw new ApplicationException("Username or password is incorrect");
            }

            if (user.isEmailConfirmed == false)
            {

                throw new ApplicationException("Your email is not verified yet");
            }
            else
            {
               return   _mapper.Map<MemberReadDto>(user);
            }

            //return _mapper.Map<MemberReadDto>(user);


        }

       

        public IEnumerable<Member> GetAllMembers()
        {
            return _appDbContext.Members.ToList();
        }

        public Member GetMember(int id)
        {
            return _appDbContext.Members.FirstOrDefault(m => m.Id==id);
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges() >= 0);
        }
    }
}
