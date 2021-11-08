namespace BookStore.Dtos.AuthorDtos
{
    public class AuthorReadDto
    {
        public int AuthorId { get; set; }

        public string AuthorName { get; set; }
        public string Description { get; set; }
       // public ICollection<Book> Books { get; set; }
    }
}
