using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.AdminDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
namespace BookStore.Controllers
{
    [Route("api/controller/admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepo repo;
        private readonly IMapper _mapper;

        public AdminController(IAdminRepo _repo, IMapper mapper)
        {
            repo = _repo;
            _mapper = mapper;
        }

        [HttpPost]
        public ActionResult<AdminReadDto> CreateAdmin(AdminCreateDto adminCreateDto)
        {
            var adminModel = _mapper.Map<Admin>(adminCreateDto);
            adminModel.UserType = "1";
            
            //memberModel.Contact.ContactInfoId=memberCreateDto.Id;
            repo.CreateAdmin(adminModel);
            repo.SaveChanges();


            return Ok(adminModel);
        }

        [HttpGet]
        public ActionResult<IEnumerable<AdminReadDto>> GetAllAdmins()
        {
            var adminList = repo.GetAllAdmins();
            return Ok(_mapper.Map<IEnumerable<AdminReadDto>>(adminList));

        }

        [HttpGet("{id}", Name = "GetAdminById")]
        public ActionResult<AdminReadDto> GetAdminById(int id)
        {
            var admin = repo.GetAdmin(id);
            if (admin != null)
            {
                return Ok(_mapper.Map<AdminReadDto>(admin));
            }

            return NotFound();
        }


    }
}
