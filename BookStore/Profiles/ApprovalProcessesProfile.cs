using AutoMapper;
using BookStore.Dtos.ProcessDtos;
using BookStore.Models;

namespace BookStore.Profiles
{
    public class ApprovalProcessesProfile : Profile
    {
        public ApprovalProcessesProfile()
        {
            CreateMap<ApprovalProcessCreateDto, ApprovalProcess>();
            CreateMap<ApprovalProcess, ApprovalProcessReadDto>();
        }
    }
}
