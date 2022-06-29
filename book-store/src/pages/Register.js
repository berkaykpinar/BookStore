import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, Checkbox, Form, Input, Label } from "semantic-ui-react";
import MemberService from "../services/MemberService";

const MAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const Register = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");

  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const result = MAIL_REGEX.test(email);

    setValidEmail(result);
  }, [email]);

  let info = {
    name: name,
    nickName: nickName,
    email: email,
    password: password,
  };

  let handleRegister = async () => {
    let memberService = new MemberService();
    const response = await memberService.addMember(info).catch((err) => {
      if (!err?.response) {
        setErrorMsg("No server response");
      } else if (err.response.data.includes("Username is already taken")) {
        setErrorMsg("Username is already taken");
      } else if (err.response.data.includes("Email is already in use")) {
        setErrorMsg("Email is already in use");
      } else {
        setErrorMsg("Registration has failed");
      }
      return err.response.data;
    });
    console.log(response);
    if (errorMsg != "") {
      alert(errorMsg);
    } else {
      alert("Your account successfully added");
      navigate("/");
    }
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
          {email != "" && validEmail == false && (
            <Label basic color="red" pointing class>
              Please enter your email in the correct form.
            </Label>
          )}
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
