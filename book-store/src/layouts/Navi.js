import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Container, Menu, Input, Form, Button } from "semantic-ui-react";
import SearchResults from "../pages/SearchResults";

const Navi = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [input, setInput] = useState("");

  const history = useHistory();

  // let handleClick = () => {
  //   history.push("/searchresults/" + input);
  // };
  return (
    <div style={{ marginBottom: "3%" }}>
      <Menu inverted size="large" className="app" color="brown">
        <Container>
          <Menu.Item>
            <Link to="/">Main Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link>My Ads</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/addAdvertisement">Add Advertisement</Link>
          </Menu.Item>
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
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
