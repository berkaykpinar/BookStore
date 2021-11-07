using BookStore.Models;
using System.Collections;
using System.Collections.Generic;

namespace BookStore.Data.Abstracts
{
    public interface IMemberRepo
    {
        bool SaveChanges();

        IEnumerable<Member> GetAllMembers();

        Member GetMember(int id);

        void CreateMember(Member member);


    }
}
