using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class BookAdvertisement
    {

        public int BookAdvertisementId { get; set; }
    
        [ForeignKey("Book")]
        public int BookId {  get; set; }
        public Book Book {  get; set; }
        public string Condition {  get; set; }

        public double Price {  get; set; }

        public bool AdStatus {  get; set; }

        [ForeignKey("Member")]
        public int MemberId {  get; set; }
        public Member Member {  get; set; }
    }
}
