using AutoMapper;
using BookStore.Dtos.BookDtos;
using BookStore.Models;

namespace BookStore.Profiles
{
    public class BooksProfile : Profile
    {
        public BooksProfile()
        {
            CreateMap<BookCreateDto,Book>();
            CreateMap<Book, BookReadDto>();
        }
        
    }
}