import axios from "axios";

export default class BookService {
  getBooksByName(word) {
    return axios.get("https://localhost:44341/searchBooks/" + word);
    console.log(axios.get("https://localhost:44341/searchBooks/" + word));
  }

  getBookByBookId(bookId) {
    return axios.get("https://localhost:44341/api/controller/book/" + bookId);
  }
  addBook(book) {
    return axios.post("https://localhost:44341/api/controller/book", book);
  }

  getAuthorsByName(word) {
    return axios.get("https://localhost:44341/authors/" + word);
  }

  addAuthor(author) {
    return axios.post("https://localhost:44341/api/controller/author", author);
  }
}
