using BookStore.Models;

namespace BookStore.Dtos.ProcessDtos
{
    public class ApprovalProcessReadDto
    {
     public int ProcessId { get; set; }

        public string Date { get; set; }

        public string ProcessResult { get; set; }

     
        public int AdminId { get; set; }

        public virtual Admin Admin { get; set; }
    }
}
