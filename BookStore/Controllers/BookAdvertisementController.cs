using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.BookAdvertisementDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    
    [Authorize(Roles = "Admin,User")]
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Route("api/controller/bookadvertisement")]
    public class BookAdvertisementController : ControllerBase
    {
        private readonly IBookAdvertisement _bookAdvertisementRepo;
        private readonly IMapper _mapper;

        public BookAdvertisementController(IBookAdvertisement bookAdvertisementRepo, IMapper mapper)
        {
            _bookAdvertisementRepo = bookAdvertisementRepo;
            _mapper = mapper;
        }
        
        [AllowAnonymous]
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
        [AllowAnonymous]
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

        [HttpGet("/getAwaitingAds")]
        public ActionResult<ICollection<BookAdvertisementReadDto>> GetAwaitingAdvertisements()
        {
            var adsModel = _bookAdvertisementRepo.GetAwaitingAds();
            if (adsModel == null)
            {
                return NoContent();
            }

            return Ok(_mapper.Map<ICollection<BookAdvertisementReadDto>>(adsModel));
        }
        
        [HttpGet(template: "/findByMemberId/{id}", Name = "GetBookAdsByMemberId")]
        public ActionResult<IEnumerable<BookAdvertisementReadDto>> GetBookAdsByMemberId(int id)
        {
            var bookAd = _bookAdvertisementRepo.GetBookAdsByMemberId(id);

            if (bookAd == null)
            {
                return NoContent();
            }

            return Ok(_mapper.Map<IEnumerable<BookAdvertisementReadDto>>(bookAd));

        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult<BookAdvertisementReadDto> CreateBookAdvertisement(BookAdvertisementCreateDto bookAdvertisementCreateDto)
        {
            var bookAd = _mapper.Map<BookAdvertisement>(bookAdvertisementCreateDto);
          
            
                _bookAdvertisementRepo.CreateBookAdvertisement(bookAd);
                _bookAdvertisementRepo.SaveChanges();

                return Ok(bookAd);
        }

        [AllowAnonymous]
        [HttpPatch("{id}",Name = "PartialAdvertisementUpdate")]
        public ActionResult PartialAdvertisementUpdate(int id, JsonPatchDocument<BookAdvertisementUpdateDto> patchDocument)
        {
            var advertisementModel = _bookAdvertisementRepo.GetBookAdvertisementById(id);
            if (advertisementModel == null)
            {
                return NotFound();
            }

            var advertisementToPatch = _mapper.Map<BookAdvertisementUpdateDto>(advertisementModel);
            patchDocument.ApplyTo(advertisementToPatch,ModelState);

            if (!TryValidateModel(advertisementToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(advertisementToPatch, advertisementModel);
            _bookAdvertisementRepo.UpdateBookAdvertisement(advertisementModel);

            _bookAdvertisementRepo.SaveChanges();
            return NoContent();
        }

        [AllowAnonymous]
        [HttpDelete("delete/{adId}")]
        public ActionResult DeleteAdvertisement(int adId)
        {
            var adModel = _bookAdvertisementRepo.GetBookAdvertisementById(adId);
            if (adModel == null)
            {
                return NotFound();
            }

            _bookAdvertisementRepo.DeleteAdvertisement(adModel);
            _bookAdvertisementRepo.SaveChanges();

            return NoContent();
        }
    }
}