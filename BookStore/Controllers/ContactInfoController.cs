using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.ContactInfoDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;


namespace BookStore.Controllers
{
    [Route("api/controller/ContactInfo")]
    [ApiController]    
    public class ContactInfoController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IContactInfoRepo _contactInfoRepo;
        private readonly IMemberRepo _memberRepo;

        public ContactInfoController(IMapper mapper, IContactInfoRepo contactInfoRepo,IMemberRepo memberRepo)
        {
            _mapper = mapper;
            _contactInfoRepo = contactInfoRepo;
            _memberRepo = memberRepo;
        }

        [HttpPost]
        public ActionResult<ContactInfoReadDto> CreateContactInfo(ContactInfoCreateDto createDto)
        {
            var contactInfoModel = _mapper.Map<ContactInfo>(createDto);
            _contactInfoRepo.CreateContactInfo(contactInfoModel);
            _contactInfoRepo.SaveChanges();

            var ContactReadDto = _mapper.Map<ContactInfoReadDto>(contactInfoModel);
            
            return Ok(ContactReadDto);
        }

        [HttpGet]
        public ActionResult<IEnumerable<ContactInfoReadDto>> GetAllContactInfos()
        {
            var contactInfoList = _contactInfoRepo.GetAllContactInfos();

            return Ok(_mapper.Map<IEnumerable< ContactInfoReadDto>>(contactInfoList));
            //if(contactInfoList != null)
            //{
            //    return Ok(_mapper.Map<ContactInfoReadDto>(contactInfoList));
            //}
            //else
            //{
            //    return NotFound();
            //}
        }

        [HttpPut("{id}")]
        public ActionResult UpdateContactInfo(int memberId, ContactInfoCreateDto contactInfo )
        {
            Member tempMember;
         
            var memberModel = _memberRepo.GetMember(memberId);
            if (memberModel == null)
            {
                return NotFound();
            }

            tempMember = memberModel;
            tempMember.Id += 1;
            tempMember.Contact = _mapper.Map<ContactInfo>(contactInfo);

            _mapper.Map(memberModel,tempMember);
            _contactInfoRepo.UpdateContactInfo(memberModel.Contact);  
            _memberRepo.SaveChanges();
            _contactInfoRepo.SaveChanges();
            return NoContent();

        }

    }
}
