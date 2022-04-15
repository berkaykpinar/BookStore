using System.ComponentModel.DataAnnotations;
using BookStore.Dtos.ContactInfoDtos;
using BookStore.Models;
namespace BookStore.Dtos.AdminDtos
{
    public class AdminCreateDto
    {

        [Required]
        public string Name { get; set; }

        [Required]
        public string NickName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }




    }
}
