import axios from "axios";
let localhost = "localhost:44341";
export default class BookService {
  getBooksByName(word) {
    return axios.get(`https://${localhost}/searchBooks/` + word);
  }

  getBookByBookId(bookId) {
    return axios.get(`https://${localhost}/api/controller/book/` + bookId);
  }
  addBook(book) {
    return axios.post(`https://${localhost}/api/controller/book`, book);
  }

  getAuthorsByName(word) {
    return axios.get(`https://${localhost}/authors/` + word);
  }

  getAuthorById(id) {
    return axios.get(`https://${localhost}/api/controller/author/` + id);
  }

  addAuthor(author) {
    return axios.post(`https://${localhost}/api/controller/author`, author);
  }

  getAllBooks() {
    return axios.get(`https://${localhost}/api/controller/book`);
  }
}
