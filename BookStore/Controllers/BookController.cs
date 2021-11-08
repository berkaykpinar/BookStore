using AutoMapper;
using BookStore.Data.Abstracts;
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

        

    }
}
