using AutoMapper;
using BookStore.Dtos.AdminDtos;
using BookStore.Models;
namespace BookStore.Profiles
{
    public class AdminsProfile : Profile
    {
        public AdminsProfile()
        {
             CreateMap<AdminCreateDto, Admin>();
             CreateMap<Admin, AdminReadDto>();
             CreateMap<Admin, AdminApprovalDto>();
             CreateMap<AdminValidateDto,Admin>();
        }
    }
}
