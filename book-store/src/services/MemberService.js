import axios from "axios";

export default class MemberService {
  getBookAdvertisementList() {
    let x = axios.get(
      "https://localhost:44341/api/controller/bookadvertisement"
    );
    //console.log(x);
    return x;
  }

  getBookDetail(bookId) {
    let x = axios.get("https://localhost:44341/api/controller/book/" + bookId);
    let title = x.data;
    //console.log(x.then((value) => value));
    return x;
  }
}
