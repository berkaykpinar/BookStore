import { useState } from "react";
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
  let memberService = new MemberService();

  let handleLogin = async () => {
    let result = await memberService
      .validateMember(info)
      .catch((res) => console.log(res));
    console.log(result);

    // if (result.includes("Username or password is incorrect")) {
    //   setErrorMessage("Username or password is incorrect");
    // }

    // if (result.includes("Your email is not verified yet")) {
    //   setErrorMessage("Your email is not verified yet");
    // }
    alert("Your account successfully added");

    history.push("/");
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
