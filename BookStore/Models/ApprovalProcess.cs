using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
   
    public class ApprovalProcess
    {
        [Key]
        public int ProcessId {  get; set; }



        public string Date {  get; set; }

        public string ProcessResult {  get; set; }

        [ForeignKey("Admin")]
        public int AdminId {  get; set; }

        public virtual Admin Admin {  get; set; }
    }
}
