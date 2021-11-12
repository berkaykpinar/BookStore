import axios from "axios";

export default class MemberService {
  getBookAdvertisementList() {
    return axios.get(
      "https://localhost:44341/api/controller/bookadvertisement"
    );
  }

  addBookAdvertisement(bookAd) {
    return axios.post(
      "https://localhost:44341/api/controller/bookadvertisement",
      bookAd
    );
  }
  getMemberById(memberId) {
    return axios.get("https://localhost:44341/findByMemberId/" + memberId);
  }
}
