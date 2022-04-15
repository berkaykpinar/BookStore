import axios from "axios";

let localhost = "localhost:44341";

export default class MemberService {
  addMember(member) {
    return axios.post(`https://${localhost}/api/controller`, member);
  }

  validateMember(memberInfo) {
    return axios.post(`https://${localhost}/api/controller/auth`, memberInfo);
  }

  getBookAdvertisementList() {
    return axios.get(`https://${localhost}/api/controller/bookadvertisement`);
  }

  addBookAdvertisement(bookAd) {
    return axios.post(
      `https://${localhost}/api/controller/bookadvertisement`,
      bookAd
    );
  }
  getMemberById(memberId) {
    return axios.get(`https://${localhost}/findByMemberId/` + memberId);
  }

  getAdvertisementByAdId(adId) {
    return axios.get(
      `https://${localhost}/api/controller/bookadvertisement/` + adId
    );
  }

  getContactInfoByInfoId(id) {
    return axios.get(`https://${localhost}//api/controller/ContactInfo/` + id);
  }

  getAdvertisementsByMemberId(id) {
    return axios.get(`https://${localhost}//findByMemberId/` + id);
  }

  updateAdStatus(id, patch) {
    console.log(patch);
    return axios
      .patch(
        `https://${localhost}/api/controller/bookadvertisement/${id}`,
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
      `https://${localhost}/api/controller/bookadvertisement/delete/` + id
    );
  }
}
