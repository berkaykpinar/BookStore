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

  getAdvertisementByAdId(adId) {
    return axios.get(
      "https://localhost:44341/api/controller/bookadvertisement/" + adId
    );
  }

  getContactInfoByInfoId(id) {
    return axios.get(
      "https://localhost:44341/api/controller/ContactInfo/" + id
    );
  }

  getAdvertisementsByMemberId(id) {
    return axios.get("https://localhost:44341/findByMemberId/" + id);
  }
}
