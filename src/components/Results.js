import React, { Component } from "react";
import Pet from "./Pet";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Container, Header } from "semantic-ui-react";
import { Consumer } from "./SearchContext";

class Results extends Component {
  render() {
    // console.log("PETS ===>", this.state.pets);
    return (
      <div>
        <NavHeader />
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
