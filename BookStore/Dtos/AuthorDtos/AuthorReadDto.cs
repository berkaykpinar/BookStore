using System.Collections.Generic;
using BookStore.Dtos.BookDtos;
using BookStore.Models;
using Castle.Components.DictionaryAdapter;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BookStore.Dtos.AuthorDtos
{
    public class AuthorReadDto
    {
      // [Key("AuthorId")]
        public int AuthorId { get; set; }

        public string AuthorName { get; set; }
        public string Description { get; set; }
        
        public virtual ICollection<BookReadDto> Books { get; set; }
    }
}
