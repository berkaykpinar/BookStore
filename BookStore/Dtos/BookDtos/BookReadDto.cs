using System.ComponentModel.DataAnnotations.Schema;
using BookStore.Dtos.AuthorDtos;
using BookStore.Models;
using Castle.Components.DictionaryAdapter;

namespace BookStore.Dtos.BookDtos
{
    public class BookReadDto
    {
        //[Key("BookId")]
       public int BookId {  get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

       // [ForeignKey("AuthorId")]
        public int AuthorId {  get; set; }
        public virtual AuthorReadDto Author { get; set; }
    }
}