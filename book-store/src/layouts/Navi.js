import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Navi = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <div style={{ marginBottom: "3%" }}>
      <Menu inverted size="large" className="app" color="brown">
        <Container>
          <Menu.Item>
            <Link>Main Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link>My Ads</Link>
          </Menu.Item>
          <Menu.Item>
            <Link>Main Page</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
