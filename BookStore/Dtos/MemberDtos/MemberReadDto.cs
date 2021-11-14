using System.Collections;
using System.Collections.Generic;
using BookStore.Dtos.ContactInfoDtos;
using BookStore.Models;
using System.ComponentModel.DataAnnotations;
namespace BookStore.Dtos.MemberDtos
{
    public class MemberReadDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string NickName { get; set; }

        public string Email { get; set; }

        public int Score { get; set; }

        public virtual IEnumerable<ContactInfoReadDto> ContactInfo { get; set; }

        //public virtual ICollection<BookAdvertisement> bookAdList { get; set; } 
    }
}
