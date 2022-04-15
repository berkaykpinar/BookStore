using BookStore.Dtos.MemberDtos;
using System.ComponentModel.DataAnnotations;


namespace BookStore.Dtos.ContactInfoDtos
{
    public class ContactInfoCreateDto
    {
        public int ContactInfoId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Telegram { get; set; }

        public int MemberId { get; set; }

    }
}
