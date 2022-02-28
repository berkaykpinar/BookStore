using BookStore.Models;
using System.Collections;
using System.Collections.Generic;
using BookStore.Dtos.MemberDtos;
using Microsoft.AspNetCore.Authentication;

namespace BookStore.Data.Abstracts
{
    public interface IMemberRepo
    {
        bool SaveChanges();

        IEnumerable<Member> GetAllMembers();

        Member GetMember(int id);

        void CreateMember(Member member);

        
        MemberReadDto Authenticate(string username, string password);

    }
}
