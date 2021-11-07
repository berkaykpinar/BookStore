﻿using System.ComponentModel.DataAnnotations;

namespace BookStore.Dtos.MemberDtos
{
    public class MemberCreateDto
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
