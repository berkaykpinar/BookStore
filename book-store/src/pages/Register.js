import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Checkbox, Form, Input } from "semantic-ui-react";
import MemberService from "../services/MemberService";

const Register = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let info = {
    name: name,
    nickName: nickName,
    email: email,
    password: password,
  };
  let memberService = new MemberService();

  let handleRegister = () => {
    memberService.addMember(info);
    alert("Your account successfully added");
    history.push("/");
  };

  return (
    <Card centered>
      {" "}
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="First Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Nick Name</label>
          <input
            placeholder="Last Name"
            type="text"
            name="nickName"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Register;
