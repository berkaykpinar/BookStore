using System.Collections.Generic;
using BookStore.Dtos.BookDtos;
using BookStore.Models;
using Castle.Components.DictionaryAdapter;

namespace BookStore.Dtos.AuthorDtos
{
    public class AuthorReadDto
    {
       
        public int AuthorId { get; set; }

        public string AuthorName { get; set; }
        public string Description { get; set; }
        
        public virtual ICollection<BookReadDto> Books { get; set; }
    }
}
