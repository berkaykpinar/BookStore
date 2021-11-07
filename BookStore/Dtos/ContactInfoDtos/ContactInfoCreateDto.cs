using System.ComponentModel.DataAnnotations;


namespace BookStore.Dtos.ContactInfoDtos
{
    public class ContactInfoCreateDto
    {
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Telegram { get; set; }

    }
}
