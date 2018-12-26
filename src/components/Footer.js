import React from "react";
import {
  Container,
  Header,
  Segment,
  Grid,
  List,
  Icon
} from "semantic-ui-react";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <Segment
      fixed="buttom"
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "5em 0em",
        backgroundColor: "#ED553B"
      }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={8} textAlign="left">
            <Header as="h2" content="Adopt Me" style={{ color: "#082341" }} />
            <List>
              <List.Item>
                <Link to="/">Home</Link>
              </List.Item>
              <List.Item>
                <Link to="/about">About</Link>
              </List.Item>
              <List.Item>
                <Link to="contact">Contact</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h2" style={{ color: "#082341" }}>
              &lt; &#47;&gt; with &#10084; By AliKeshanian
            </Header>
            <Header as="h4" style={{ color: "#FFF" }}>
              Follow Me on{" "}
              <a href="https://github.com/ark1980/pet-finder">
                Github <Icon name="github" size="large" />
              </a>
            </Header>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
