using Microsoft.AspNetCore.Mvc;

namespace BookStore.Dtos.ContactInfoDtos
{
    public class ContactInfoReadDto 
    {
        public int ContactInfoId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Telegram { get; set; }
    }
}
