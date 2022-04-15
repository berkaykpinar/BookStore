import axios from "axios";

let localhost = "localhost:44341";
export default class AdminService {
  getAwaitingAds(token) {
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return authAxios.get(`https://${localhost}/getAwaitingAds`).catch((err) => {
      if (err.request) {
        console.log(err.request);
      }
    });
  }

  updateApprovalStatus(id, patch) {
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
  addApprovalProcess(process) {
    return axios.post(`ttps://${localhost}/api/controller/process`, process);
  }

  getApprovalProcess() {
    return axios.get(`https://${localhost}/api/controller/process`);
  }

  deleteAdvertisement(id) {
    return axios.delete(
      `https://${localhost}/api/controller/bookadvertisement/delete/` + id
    );
  }
}
