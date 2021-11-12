using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Book
    {
        
        public int BookId {  get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

       
        public int AuthorId {  get; set; }

        public virtual Author Author { get; set; }

       public virtual ICollection<BookAdvertisement> AdLists { get; set; }
    }
}
