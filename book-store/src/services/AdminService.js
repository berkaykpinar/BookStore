import axios from "axios";

export default class AdminService {
  getAwaitingAds() {
    return axios.get("https://localhost:44341/getAwaitingAds");
  }

  updateApprovalStatus(id, patch) {
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
}
