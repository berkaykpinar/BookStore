using System.ComponentModel.DataAnnotations;

namespace BookStore.Dtos.BookAdvertisementDtos
{
    public class BookAdvertisementUpdateDto
    {
        [Required]
        public bool AdStatus { get; set; }
    }
}
