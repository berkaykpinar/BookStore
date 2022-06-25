using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.MemberDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using BookStore.JwtAuthentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace BookStore.Controllers
{
    [Authorize(Roles = "Admin") ]
    [EnableCors("CorsPolicy")]
    [Route("api/controller")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly IMemberRepo repo;
        private readonly IMapper _mapper;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
            
        public MembersController(IMemberRepo memberRepo, IMapper mapper,IJwtAuthenticationManager manager)
        {
            repo = memberRepo;
            _mapper = mapper;
            _jwtAuthenticationManager = manager;
        }

        
        [AllowAnonymous]
        [HttpPost]
        public ActionResult<MemberCreateDto> CreateMember(MemberCreateDto memberCreateDto)
        {
            var memberModel = _mapper.Map<Member>(memberCreateDto);

            bool checkResult= repo.CheckMember(memberModel);

            if(checkResult)
            {
                repo.CreateMember(memberModel);

                repo.SaveChanges();
                return Ok("memberModel");
            }
            else
            {
                return NotFound("Member can not be added");
            }
            //memberModel.Contact.ContactInfoId=memberCreateDto.Id;
            


            
        }

        [AllowAnonymous]
        [Route("auth")]
        [HttpPost]
        public ActionResult<MemberReadDto> Authentication(MemberValidateDto member)
        {
            var result = repo.Validate(member.NickName, member.Password);


            if (result == null)
            {
                return NotFound("Member is can not found");
            }

            var token= _jwtAuthenticationManager.Authenticate(member.NickName);
            var role = "User";

            var tokenModel = new Token()
            {
                AccessToken = token,role = role,userId = result.Id,
                UserName = member.NickName
            };
            return Ok(tokenModel);
        }
        
        
        [HttpGet]
        public ActionResult<IEnumerable<MemberReadDto>> GetAllMembers()
        {
            var memberList = repo.GetAllMembers();
            return Ok(_mapper.Map<IEnumerable<MemberReadDto>>(memberList));
        }

        [HttpGet("{id}", Name = "GetMemberById")]
        public ActionResult<MemberReadDto> GetMemberById(int id)
        {
            var member = repo.GetMember(id);
            if (member != null)
            {
                return Ok(_mapper.Map<MemberReadDto>(member));
            }

            return NotFound();
        }
    }
}