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
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import { BASE_URL } from "../api/axios";
const AdminLogin = () => {
  const axiosPrivate = useAxiosPrivate();
  const { setAuth } = useAuth();
  const { setAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let info = {
    nickName: nickName,
    password: password,
  };

  let handleLogin = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/controller/admin/auth`,
        info,
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = [response?.data?.role];
      const adminId = response?.data?.userId;

      console.log(accessToken);
      setAuth({ nickName, roles, accessToken });
      setAdmin({ adminId });
      setNickName("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
    console.log(typeof response);

    if (typeof response == "string") {
      alert("Username or password is incorrect");
    } else {
      //alert("You successfully logged in");
      //navigate("/");
    }
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
          Login as An Admin
        </Button>
      </Form>
    </Card>
  );
};

export default AdminLogin;
