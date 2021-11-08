using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.BookAdvertisementDtos;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/controller/bookadvertisement")]
    public class BookAdvertisementController : ControllerBase
    {
        private readonly IBookAdvertisement _bookAdvertisement;
        private readonly Mapper _mapper;

        public BookAdvertisementController(IBookAdvertisement bookAdvertisement, Mapper mapper)
        {
            _bookAdvertisement = bookAdvertisement;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<ICollection<BookAdvertisementReadDto>> GetAllBooks()
        {
            var bookAds = _bookAdvertisement.GetAllBookAdvertisements();
            if (bookAds == null)
            {
                return NoContent();
            }else
            {
                return Ok(_mapper.Map<ICollection<BookAdvertisementReadDto>>(bookAds));
            }
            
            
        }
    }
}