using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Member : UserBase
    {
        public int Score { get; set; }


        public virtual ICollection<ContactInfo> ContactInfo {  get; set; }

        public virtual ICollection<BookAdvertisement> Advertisements { get; set; }



    }
}
