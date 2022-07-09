import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(
      `https://localhost:44341/refresh?nickName=${auth.nickName}&role=${auth.roles[0]}`,
      {
        withCredentials: true,
      }
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data);
      return { ...prev, accessToken: response.data };
    });
    return response.data;
  };

  return refresh;
};

export default useRefreshToken;
