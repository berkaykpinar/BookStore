using System;
using BookStore.Models;

namespace BookStore.Dtos.BookAdvertisementDtos
{
    public class BookAdvertisementCreateDto
    {

        public int BookAdvertisementId { get; set; }

        public int BookId { get; set; }

        public Book Book { get; set; }

        public string Condition { get; set; }

        public double Price { get; set; }

        public bool AdStatus { get; set; }

        public int MemberId { get; set; }

        public Member Member { get; set; }
    }
}
