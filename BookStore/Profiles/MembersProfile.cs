using AutoMapper;
using BookStore.Dtos.MemberDtos;
using BookStore.Models;
namespace BookStore.Profiles
{
    public class MembersProfile : Profile
    {
        public MembersProfile()
        {
            CreateMap<MemberCreateDto, Member>();
            CreateMap<Member, MemberReadDto>();
        }
    }
}
