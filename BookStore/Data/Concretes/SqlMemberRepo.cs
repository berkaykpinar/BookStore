using BookStore.Data.Abstracts;
using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Data.Concretes
{
    public class SqlMemberRepo : IMemberRepo
    {
        private readonly AppDbContext _appDbContext;

        public SqlMemberRepo(AppDbContext appDbContext)
        {
            _appDbContext= appDbContext;
        }

        public void CreateMember(Member member)
        {

            if (member == null)
            {
                throw new ArgumentNullException("member is null");
            }

            _appDbContext.Members.Add(member);
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
