import React, { Component } from "react";
import Pet from "./Pet";
import { Container, Header } from "semantic-ui-react";
import { Consumer } from "./SearchContext";
import { Link } from "@reach/router";

class Results extends Component {
  render() {
    // console.log("PETS ===>", this.state.pets);
    return (
      <Consumer>
        {context => (
          <Container style={{ margin: "5rem auto" }}>
            <Link to="/">Search Again</Link>
            <Header as="h2">Results</Header>
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
    );
  }
}

export default Results;
