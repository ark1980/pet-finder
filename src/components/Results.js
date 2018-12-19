import React, { Component } from "react";
import Pet from "./Pet";
import { Container, Header } from "semantic-ui-react";
import { petfinder } from "./Api";
import { Consumer } from "./SearchContext";
import SearchForm from "./SearchForm";

class Results extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
  };

  render() {
    // console.log("PETS ===>", this.state.pets);
    return (
      <Container style={{ margin: "5rem auto" }}>
        <Header as="h1">Look for Your Future Pet</Header>
        <SearchForm search={this.search} />
        <Header as="h2">Results</Header>
        {this.state.pets.map(pet => {
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
    );
  }
}

export default function resultWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
