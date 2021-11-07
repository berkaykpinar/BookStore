using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class ContactInfo
    {
       
        public int ContactInfoId {  get; set; }

        public string Email {  get; set; }
        public string Phone {  get; set; }

        public string Telegram {  get; set; }

        [ForeignKey("Member")]
        public int MemberId {  get; set; }
        public virtual Member Member {  get; set; }
    }
}
