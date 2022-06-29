using System.ComponentModel.DataAnnotations;

namespace BookStore.Dtos.AdminDtos
{
    public class AdminValidateDto
    {
        [Required]
        public string NickName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
