using BookStore.Dtos.AdminDtos;
using BookStore.Models;

namespace BookStore.Dtos.ProcessDtos
{
    public class ApprovalProcessCreateDto
    {
       
        public int ProcessId { get; set; }

        public string Date { get; set; }

        public string ProcessResult { get; set; }

        public int AdminId { get; set; }

       // public Admin Admin { get; set; }
    }
}
