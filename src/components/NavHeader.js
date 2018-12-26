import React, { Component } from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

class NavHeader extends Component {
  render() {
    return (
      <Menu fixed="top" style={{ backgroundColor: "#ED553B" }}>
        <Container>
          <Menu.Item
            as="a"
            header
            style={{
              fontFamily: "'Gochi Hand', cursive",
              fontSize: "2.2rem"
            }}
          >
            <Icon name="paw" style={{ color: "#082341" }} />
            <Link to="/" style={{ color: "#FFB400" }}>
              ADOPT ME
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <Link to="/">ABOUT</Link>
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/shelters">SHELTERS</Link>
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/contact">CONTACT</Link>
            </Menu.Item>
            <Menu.Item name="" />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default NavHeader;
