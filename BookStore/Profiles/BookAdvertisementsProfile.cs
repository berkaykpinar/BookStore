using AutoMapper;
using BookStore.Dtos.BookAdvertisementDtos;
using BookStore.Models;
namespace BookStore.Profiles
{
    public class BookAdvertisementsProfile : Profile
    {
        public BookAdvertisementsProfile()
        {
            CreateMap<BookAdvertisementCreateDto, BookAdvertisement>();
            CreateMap<BookAdvertisement, BookAdvertisementReadDto>();
            CreateMap<BookAdvertisement, BookAdvertisementUpdateDto>();
            CreateMap<BookAdvertisementUpdateDto, BookAdvertisement>();
        }
    }
}
