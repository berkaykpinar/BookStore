using System.Collections;
using System.Collections.Generic;

namespace BookStore.Models
{
    public class Author
    {
        public int AuthorId {  get; set; }

        public string AuthorName {  get; set; }
        public string Description {  get; set; }
        public ICollection<Book> Books {  get; set; }
    }
}
