namespace BookStore.Dtos.BookDtos
{
    public class BookCreateDto
    {
        //public int BookId {  get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        
        public int AuthorId {  get; set; }
        //public Author Author { get; set; }
    }
}