using System.Collections.Generic;

namespace BookStore.Models
{
    public class Member : UserBase
    {
        public int Score { get; set; }

        public virtual ContactInfo Contact {  get; set; }

        public ICollection<BookAdvertisement> Advertisements { get; set; }



    }
}
