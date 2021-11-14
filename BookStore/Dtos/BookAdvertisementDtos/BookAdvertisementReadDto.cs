using System;
using BookStore.Dtos.BookDtos;
using BookStore.Dtos.MemberDtos;
using BookStore.Models;

namespace BookStore.Dtos.BookAdvertisementDtos
{
    public class BookAdvertisementReadDto
    {
        public int BookAdvertisementId { get; set; }

        
        public int BookId { get; set; }

        public BookReadDto Book { get; set; }

        public string Condition { get; set; }

        public double Price { get; set; }

        public bool IsApproved { get; set; }
        public bool AdStatus { get; set; }

        public int MemberId { get; set; }

        public MemberReadDto Member { get; set; }
    }
}
