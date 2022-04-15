using AutoMapper;
using BookStore.Dtos.AuthorDtos;
using BookStore.Models;

namespace BookStore.Profiles
{
    public class AuthorsProfile : Profile
    {
        public AuthorsProfile()
        {
            CreateMap<AuthorCreateDto, Author>();
            CreateMap<Author, AuthorReadDto>();
        }
    }
}
