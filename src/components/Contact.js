import React from "react";
import Footer from "./Footer";
import NavHeader from "./NavHeader";
import {
  Container,
  Segment,
  Header,
  Grid,
  Icon,
  Popup
} from "semantic-ui-react";

const Contact = () => {
  return (
    <div className="contact">
      <NavHeader />
      <Container style={{ marginTop: "10rem" }}>
        <Header as="h1">Contact</Header>
        <Segment style={{ padding: "5rem" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Popup
                  content={"Contribute to the project"}
                  trigger={
                    <Header
                      as="a"
                      href="https://github.com/ark1980/pet-finder"
                      style={{ fontSize: "2em" }}
                    >
                      <Icon name="github" size="huge" />
                      Github
                    </Header>
                  }
                />
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Popup
                  content={"Follow us on Twitter"}
                  trigger={
                    <Header
                      as="a"
                      href="https://github.com/ark1980/pet-finder"
                      style={{ fontSize: "2em" }}
                    >
                      <Icon name="twitter" size="huge" />
                      Twitter
                    </Header>
                  }
                />
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Popup
                  content={"Follow us on Instagram"}
                  trigger={
                    <Header
                      as="a"
                      href="https://github.com/ark1980/pet-finder"
                      style={{ fontSize: "2em" }}
                    >
                      <Icon name="instagram" size="huge" />
                      Instagram
                    </Header>
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
