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
        bool CheckMember(Member member);
        IEnumerable<Member> GetAllMembers();

        Member GetMember(int id);

        void CreateMember(Member member);

        
        MemberReadDto Validate(string username, string password);

    }
}
