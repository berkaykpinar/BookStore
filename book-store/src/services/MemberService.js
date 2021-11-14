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

  updateAdStatus(id, patch) {
    console.log(patch);
    return axios
      .patch(
        `https://localhost:44341/api/controller/bookadvertisement/${id}`,
        patch
      )
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
      });
  }

  deleteAdvertisement(id) {
    return axios.delete(
      "https://localhost:44341/api/controller/bookadvertisement/delete/" + id
    );
  }
}
