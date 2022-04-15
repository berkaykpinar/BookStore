using AutoMapper;
using BookStore.Dtos.ContactInfoDtos;
using BookStore.Models;

namespace BookStore.Profiles
{
    public class ContactInfosProfile : Profile
    {
        public ContactInfosProfile()
        {
            CreateMap<ContactInfoCreateDto, ContactInfo>();
            CreateMap<ContactInfo, ContactInfoReadDto>();
        }
    }
}
