import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Checkbox, Form, Input } from "semantic-ui-react";
import MemberService from "../services/MemberService";

const Login = () => {
  let history = useHistory();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let info = {
    nickName: nickName,
    email: email,
    password: password,
  };
  let memberService = new MemberService();

  let handleRegister = async () => {
    let result = await memberService.validateMember(info);
    // alert("Your account successfully added");
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
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={() => handleRegister()}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
