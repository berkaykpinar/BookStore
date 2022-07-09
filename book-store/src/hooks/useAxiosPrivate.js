import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

//bu hook requestlere interceptor eklemek için var
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  //interceptor request reddedilirse (süresi dolduysa) tokenı yeniler
  //event listener gibi çalışır
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      //response da sıkıntı yoksa direk responsu return eder. hata varsa error kısmına düşer
      async (error) => {
        const prevRequest = error?.config;
        //sent boşsa veya doğru değilse if koşuluna girer. yoksa sonsuz döngüye girebilir
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToke = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToke}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
