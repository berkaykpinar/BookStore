using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookStore.Models
{
    public class UserBase
    {
        [Key]
        public int Id {  get; set; }

        [Required]
        public string Name {  get; set; }
        [Required]
        public string NickName {  get; set; }
        [Required]
        public string Email {  get; set; }

        [Required]
        public string Password {  get; set; }

        [Required]
        public string UserType {  get; set; }

        public bool isEmailConfirmed { get; set; }


    }
}
