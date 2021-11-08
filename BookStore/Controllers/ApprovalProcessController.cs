using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.ProcessDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("/api/controller/process")]
    public class ApprovalProcessController : ControllerBase
    {
        private readonly IProcessRepo _processRepo;
        private readonly IMapper _mapper;

        public ApprovalProcessController(IProcessRepo processRepo, IMapper mapper)
        {
            _processRepo = processRepo;
            _mapper = mapper;

        }

        [HttpGet("{id}",Name = "GetProcessesByAdminId")]
        public ActionResult<IEnumerable<ApprovalProcessReadDto>> GetProcessesByAdminId(int id)
        {
            var processList = _processRepo.GetProcessByAdminId(id);
            if (processList == null)
            {
                return NotFound();

            }
            else
            {
                return  Ok(_mapper.Map<IEnumerable<ApprovalProcessReadDto>>(processList));
            }
        }

        [HttpPost]
        public ActionResult<ApprovalProcessReadDto> CreateProcess(ApprovalProcessCreateDto approvalProcess)
        {
            var processModel = _mapper.Map<ApprovalProcess>(approvalProcess);
            _processRepo.CreateProcess(processModel);
            _processRepo.SaveChanges();

            return Ok(processModel);
        }
    }
}
