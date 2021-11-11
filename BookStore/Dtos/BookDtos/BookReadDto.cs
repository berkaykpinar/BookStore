using BookStore.Models;
using Castle.Components.DictionaryAdapter;

namespace BookStore.Dtos.BookDtos
{
    public class BookReadDto
    {
        [Key("BookId")]
        public int BookId {  get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        
        public int AuthorId {  get; set; }
        public virtual Author Author { get; set; }
    }
}