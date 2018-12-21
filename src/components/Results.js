import React, { Component } from "react";
import Pet from "./Pet";
import Footer from "./Footer";
import { Container, Header, Menu, Icon, MenuItem } from "semantic-ui-react";
import { Consumer } from "./SearchContext";
import { Link } from "@reach/router";

class Results extends Component {
  render() {
    // console.log("PETS ===>", this.state.pets);
    return (
      <div>
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
                <Link to="/">SEARCH AGAIN</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="/">ABOUT</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="/contact">CONTACT</Link>
              </Menu.Item>
              <MenuItem name="" />
            </Menu.Menu>
          </Container>
        </Menu>
        <Consumer>
          {context => (
            <Container style={{ margin: "10rem auto" }}>
              <Header as="h1">Results</Header>
              {context.pets.map(pet => {
                let breed;
                if (Array.isArray(pet.breeds.breed)) {
                  breed = pet.breeds.breed.join(", ");
                } else {
                  breed = pet.breeds.breed;
                }
                return (
                  <Pet
                    key={pet.id}
                    id={pet.id}
                    age={pet.age}
                    animal={pet.animal}
                    name={pet.name}
                    breed={breed}
                    media={pet.media}
                    location={`${pet.contact.city}, ${pet.contact.state}`}
                  />
                );
              })}
            </Container>
          )}
        </Consumer>
        <Footer />
      </div>
    );
  }
}

export default Results;
