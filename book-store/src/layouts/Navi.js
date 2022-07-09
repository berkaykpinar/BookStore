import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Container, Menu, Input, Form, Button } from "semantic-ui-react";
import useAuth from "../hooks/useAuth";
import SearchResults from "../pages/SearchResults";

const Navi = () => {
  const { auth, setAuth } = useAuth();
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [input, setInput] = useState("");
  const [userType, setUserType] = useState(1);

  let handleLogin = () => {
    SetIsLoggedIn(true);
    setUserType(2);
  };
  let handleAdminLogin = () => {
    SetIsLoggedIn(true);
    setUserType(1);
  };
  const handleLogOut = () => {
    setAuth({});
  };
  return (
    <div style={{ marginBottom: "3%" }}>
      <Menu inverted size="large" className="app" color="brown">
        <Container>
          <Menu.Item>
            <Link to="/">Main Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/library">Library</Link>
          </Menu.Item>
          {auth?.nickName && auth?.roles == "Admin" && (
            <Menu.Item>
              <Link to="/awaitingapproval">Awaiting Approval</Link>
            </Menu.Item>
          )}
          {auth?.nickName && auth?.roles == "Admin" && (
            <Menu.Item>
              <Link to="/approvalLogs">Approval Logs</Link>
            </Menu.Item>
          )}

          {auth?.nickName && auth?.roles == "User" && (
            <Menu.Item>
              <Link to="/addAdvertisement">Add Advertisement</Link>
            </Menu.Item>
          )}
          {auth?.nickName && auth?.roles == "User" && (
            <Menu.Item>
              <Link to="/myadvertisements">My Advertisements</Link>
            </Menu.Item>
          )}

          <Menu.Item>
            <Form>
              <Input
                size="small"
                placeholder="Enter a book name..."
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />

              <Button style={{ marginLeft: "10px" }} compact type="submit">
                <Link to={`/searchresults/${input}`}>Search</Link>
              </Button>
            </Form>
          </Menu.Item>
          {auth?.nickName ? (
            <Menu.Item position="right">
              <Link onClick={() => handleLogOut()} to="/">
                Log Out
              </Link>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Link to="/login">
                <Button
                  onClick={() => handleLogin()}
                  content="Login"
                  primary
                  style={{ marginRight: "10px" }}
                />
              </Link>

              <Link to={"/login/admin"}>
                <Button
                  onClick={() => handleAdminLogin()}
                  content="Admin Login"
                  primary
                  style={{ marginRight: "10px" }}
                />
              </Link>

              <Button secondary>
                <Link to="/register" style={{ color: "white" }}>
                  Register
                </Link>
              </Button>
            </Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
