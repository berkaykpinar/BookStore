using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class ContactInfo
    {
        [ForeignKey("Member")]
        public int ContactInfoId {  get; set; }

        public string Email {  get; set; }
        public string Phone {  get; set; }

        public string Telegram {  get; set; }

        public virtual Member Member {  get; set; }
    }
}
