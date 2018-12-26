import React from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Header, Container } from "semantic-ui-react";

const Shelters = () => {
  return (
    <div>
      <NavHeader />
      <Container style={{ marginTop: "10rem" }}>
        <Header as="h1">Animal Shelter Lookup</Header>
        <p>
          Start your search for your local animal shelter or rescue. Enter your
          zip code, or city and state, and find a list of animal shelters,
          animal control agencies, and other animal care organizations in your
          community. You can also find animals available for adoption, low-cost
          spay/neuter services, and volunteer opportunities.
        </p>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Shelters;
