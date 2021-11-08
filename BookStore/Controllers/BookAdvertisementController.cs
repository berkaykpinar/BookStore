using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.BookAdvertisementDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/controller/bookadvertisement")]
    public class BookAdvertisementController : ControllerBase
    {
        private readonly IBookAdvertisement _bookAdvertisementRepo;
        private readonly Mapper _mapper;

        public BookAdvertisementController(IBookAdvertisement bookAdvertisementRepo, Mapper mapper)
        {
            _bookAdvertisementRepo = bookAdvertisementRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<ICollection<BookAdvertisementReadDto>> GetAllBooks()
        {
            var bookAds = _bookAdvertisementRepo.GetAllBookAdvertisements();
            if (bookAds == null)
            {
                return NoContent();
            }else
            {
                return Ok(_mapper.Map<ICollection<BookAdvertisementReadDto>>(bookAds));
            }
            
            
        }
        [HttpGet(template:"{id}",Name = "GetBookAdvertisement")]
        public ActionResult<BookAdvertisementReadDto> GetBookAdvertisement(int id)
        {
            var bookAd = _bookAdvertisementRepo.GetBookAdvertisementById(id);

            if (bookAd == null)
            {
                return NoContent();
            }

            return Ok(_mapper.Map<BookAdvertisementReadDto>(bookAd));

        }

        [HttpPost]
        public ActionResult<BookAdvertisementReadDto> CreateBookAdvertisement(BookAdvertisementCreateDto bookAdvertisementCreateDto)
        {
            var bookAd = _mapper.Map<BookAdvertisement>(bookAdvertisementCreateDto);
          
            
                _bookAdvertisementRepo.CreateBookAdvertisement(bookAd);
                _bookAdvertisementRepo.SaveChanges();

                return Ok(bookAd);
        }
    }
}