using BookStore.Dtos.ContactInfoDtos;
using BookStore.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace BookStore.Dtos.AdminDtos
{
    public class AdminReadDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string NickName { get; set; }

        public string Email { get; set; }

        public IEnumerable<ApprovalProcess> Approvals { get; set; }

        //added
    }
}
