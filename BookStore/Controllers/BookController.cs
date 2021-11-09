using System.Collections.Generic;
using AutoMapper;
using BookStore.Data.Abstracts;
using BookStore.Dtos.AuthorDtos;
using BookStore.Dtos.BookDtos;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("api/controller/book")]
    public class BookController : ControllerBase
    {
        private readonly IBookRepo _bookRepo;
        private readonly IMapper _mapper;

        public BookController(IBookRepo bookRepo, IMapper mapper)
        {
            _bookRepo = bookRepo;
            _mapper = mapper;
        }
        
        
        [HttpGet("{id}",Name = "GetBookByBookId")]
        public ActionResult<BookReadDto> GetBookByBookId(int id)
        {
            var bookModel = _bookRepo.GetBook(id);

            if (bookModel == null)
            {
                return NotFound("Book doesn't exist");
            }
            else
            {
                return _mapper.Map<BookReadDto>(bookModel);
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<BookReadDto>> GetAllBooks()
        {
            var bookList = _bookRepo.GetallBooks();
            if (bookList == null)
            {
                return NotFound("Book List not found");
            }
            else
            {
                return Ok(_mapper.Map<BookReadDto>(bookList));
            }
        }

        [HttpPost]
        public ActionResult<BookReadDto> CreateBook(BookCreateDto bookCreateDto)
        {
            var bookModel = _mapper.Map<Book>(bookCreateDto);
            
            _bookRepo.CreateBook(bookModel);
            _bookRepo.SaveChanges();

            return Ok(_mapper.Map<BookReadDto>(bookModel));

        }

        [HttpGet("/searchBooks/{bookName}",Name = "SearchBook")]
        public ActionResult<IEnumerable<BookReadDto>> SearchBook(string bookName)
        {
            var bookModel = _bookRepo.FindBookByTitle(bookName);

            if (bookModel == null)
            {
                return NotFound("Can't found any books name : " + bookName);
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<BookReadDto>>(bookModel));
            }
                
        }

        

    }
}
