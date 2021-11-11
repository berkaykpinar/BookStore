using System.Collections;
using System.Collections.Generic;
using BookStore.Dtos.BookDtos;

namespace BookStore.Models
{
    public class Author
    {
        public int AuthorId {  get; set; }

        public string AuthorName {  get; set; }
        public string Description {  get; set; }
        public virtual ICollection<BookReadDto> Books {  get; set; }
    }
}
