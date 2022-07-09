using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.AdminDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using BookStore.Data;
using BookStore.JwtAuthentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace BookStore.Controllers
{
    [Authorize(Roles = "Admin")]
    [EnableCors("CorsPolicy")]
    [Route("api/controller/admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepo repo;
        private readonly IMapper _mapper;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
       

        public AdminController(IAdminRepo _repo, IMapper mapper,IJwtAuthenticationManager jwtAuthenticationManager)
        {
            repo = _repo;
            _mapper = mapper;
            _jwtAuthenticationManager = jwtAuthenticationManager;
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult<AdminReadDto> CreateAdmin(AdminCreateDto adminCreateDto)
        {
            var adminModel = _mapper.Map<Admin>(adminCreateDto);

            //memberModel.Contact.ContactInfoId=memberCreateDto.Id;
            repo.CreateAdmin(adminModel);
            repo.SaveChanges();
            return Ok(adminModel);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("auth")]
        public ActionResult<AdminReadDto> Authenticate(AdminValidateDto admin)
        {
            var result = repo.Validate(admin.NickName,admin.Password);

            if (result == null)
            {
                return NotFound("Your password is not correct or this Admin is not exist");
            }
            var role = "Admin";
            var token = _jwtAuthenticationManager.Authenticate(admin.NickName,role,30);
            

            var tokenModel = new Token()
            {
                AccessToken = token, role = role, userId = result.Id, UserName = admin.NickName
            };

            return Ok(tokenModel);


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
