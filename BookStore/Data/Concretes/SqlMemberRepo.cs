using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using AutoMapper;
using BookStore.Dtos.MemberDtos;
using BookStore.JwtAuthentication;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
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
           


            int saltRounds = 10;
            member.UserType = "2";
            member.Score = 0;
            member.isEmailConfirmed = false;
            member.Password = BCryptNet.HashPassword(member.Password,saltRounds);

            _appDbContext.Members.Add(member);
        }

        public MemberReadDto Validate(string member, string password)
        {
            var user = _appDbContext.Members.FirstOrDefault(x => x.NickName == member);

            var hashedPass = BCryptNet.HashPassword(password, 10);

            if (user == null || !BCryptNet.Verify(password,user.Password))
            {
                throw new ArgumentException("Username or password is incorrect" );
                return null;
            }

            if (user.isEmailConfirmed == false)
            {

                throw new ArgumentException("Your email is not verified yet");
            }
            else
            { 
                
               return   _mapper.Map<MemberReadDto>(user);
            }

          


        }


        public bool CheckMember(Member member)
        {
            if (member == null)
            {
                //throw new ArgumentException("member is null");
                throw new ArgumentException("member is null");
            }

            
            if (_appDbContext.Members.Any(x => x.NickName == member.NickName))
            {
                throw new ArgumentException("Username is already taken !");
            }
            
           

            
            if (_appDbContext.Members.Any(x => x.Email == member.Email))
            {
                throw new ArgumentException("Email is already in use !");
               
            }

            return true;

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
