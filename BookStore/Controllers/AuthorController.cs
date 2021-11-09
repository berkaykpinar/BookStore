using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.AuthorDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/controller/author")]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorRepo _authorRepo;
        private readonly IMapper _mapper;

        public AuthorController(IAuthorRepo authorRepo, IMapper mapper)
        {
            _authorRepo = authorRepo;
            _mapper = mapper;
        }

        [HttpGet("{id}",Name = "GetAuthorByAuthorId")]
        public ActionResult<AuthorReadDto> GetAuthorByAuthorId(int id)
        {
            var authorModel = _authorRepo.GetAuthor(id);

            if (authorModel == null)
            {
                return NotFound("Author doesn't exist");
            }
            else
            {
                return _mapper.Map<AuthorReadDto>(authorModel);
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<AuthorReadDto>> GetAllAuthors()
        {
            var authorList = _authorRepo.GetAllAuthors();
            if (authorList == null)
            {
                return NotFound("Authors not found");
            }
            else
            {
                return Ok(_mapper.Map<AuthorReadDto>(authorList));
            }
        }

        [HttpPost]
        public ActionResult<AuthorReadDto> CreateAuthor(AuthorCreateDto authorCreateDto)
        {
            var authorModel = _mapper.Map<Author>(authorCreateDto);
            
            _authorRepo.CreateAuthor(authorModel);
            _authorRepo.SaveChanges();

            return Ok(_mapper.Map<AuthorReadDto>(authorModel));

        }

        [HttpGet("/authors/{name}",Name ="GetAuthorsByName" )]
        public ActionResult<AuthorReadDto> GetAuthorsByName(string name)
        {
            var authors = _authorRepo.FindAuthorByName(name);

            if (authors == null)
            {
                return NotFound("Can't found any authors by name : " + name);
            }
            else
            {
                return Ok(_mapper.Map<AuthorReadDto>(authors));
            }
        }
        

    }
}