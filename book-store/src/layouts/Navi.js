import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Container, Menu, Input, Form, Button } from "semantic-ui-react";
import SearchResults from "../pages/SearchResults";

const Navi = () => {
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
          {isLoggedIn && userType == 1 && (
            <Menu.Item>
              <Link to="/awaitingapproval">Awaiting Approval</Link>
            </Menu.Item>
          )}
          {isLoggedIn && userType == 1 && (
            <Menu.Item>
              <Link to="/approvalLogs">Approval Logs</Link>
            </Menu.Item>
          )}

          {isLoggedIn && userType == 2 && (
            <Menu.Item>
              <Link to="/addAdvertisement">Add Advertisement</Link>
            </Menu.Item>
          )}
          {isLoggedIn && userType == 2 && (
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
          {isLoggedIn ? (
            <Menu.Item position="right">
              <Link onClick={() => SetIsLoggedIn(false)} to="/">
                Log Out
              </Link>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Button
                onClick={() => handleLogin()}
                content="Login"
                primary
                style={{ marginRight: "10px" }}
              />
              <Button
                onClick={() => handleAdminLogin()}
                content="Admin Login"
                primary
                style={{ marginRight: "10px" }}
              />
              <Button content="Register" secondary />
            </Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
