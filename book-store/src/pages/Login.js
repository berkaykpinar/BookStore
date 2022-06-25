import { useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import MemberService from "../services/MemberService";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  let history = useHistory();
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
    let memberService = new MemberService();
    const response = await memberService
      .validateMember(info)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
    console.log(typeof response);

    if (typeof response == "string") {
      alert("Username or password is incorrect");
    }
    // else if (response.includes("Your email is not verified yet")) {
    //   alert("Your email is not verified yet");
    // }
    else {
      alert("You successfully logged in");
      history.push("/");
    }
    const accessToken = response?.data?.accessToken;
    const roles = response?.data?.role;
    const userId = response?.data?.userId;
    console.log(response);
    setAuth({ nickName, roles, accessToken });
    setNickName("");
    setPassword("");
    // if (result.includes("Username or password is incorrect")) {
    //   setErrorMessage("Username or password is incorrect");
    // }

    // if (result.includes("Your email is not verified yet")) {
    //   setErrorMessage("Your email is not verified yet");
    // }
    //alert("Your account successfully added");

    //history.push("/");
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
