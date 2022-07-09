import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import MemberService from "../api/MemberService";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import { BASE_URL } from "../api/axios";
const Login = () => {
  const { setAuth } = useAuth();
  const { setMember } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPrivate = useAxiosPrivate();

  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let info = {
    nickName: nickName,
    email: email,
    password: password,
  };

  let handleLogin = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/controller/auth`,
        info,
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      if (typeof response == "string") {
        alert("Username or password is incorrect");
      } else {
        const accessToken = response?.data?.accessToken;
        const roles = [response?.data?.role];
        const userId = response?.data?.userId;
        console.log(nickName);
        setAuth({ nickName, roles, accessToken });
        setMember({ userId });
        setNickName("");
        setPassword("");
        //from sayesinde kullanıcının geldiği sayfaya yönlendirilir
        navigate(from, { replace: true });
      }
    } catch (error) {}

    // const response = await axiosPrivate
    //   .post(`api/controller/auth`, info)
    //   .then((res) => {
    //     return res;
    //   })
    //   .catch((err) => {
    //     return err?.response?.data;
    //   });
  };

  return (
    <Card centered>
      {" "}
      <Form>
        <Form.Field>
          <label>User name</label>
          <input
            placeholder="Enter your User name"
            type="text"
            name="User name"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Enter your password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        {/* <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field> */}
        {errorMessage.length > 0 && <Message negative>{errorMessage}</Message>}
        <Button type="submit" onClick={() => handleLogin()}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
