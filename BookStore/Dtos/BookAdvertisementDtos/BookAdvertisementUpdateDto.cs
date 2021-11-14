using System.ComponentModel.DataAnnotations;

namespace BookStore.Dtos.BookAdvertisementDtos
{
    public class BookAdvertisementUpdateDto
    {
       
        public bool AdStatus { get; set; }

        public bool IsApproved { get; set; }
    }
}
