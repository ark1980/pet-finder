import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Results from "./Results";
import { petfinder } from "./Api";
import { Router } from "@reach/router";
import Contact from "./Contact";
import { Provider } from "./SearchContext";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      location: "",
      animal: "",
      breed: "",
      breeds: [],
      handleLocationChange: this.handleLocationChange,
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds,
      search: this.search
    };
  }

  // Search ==============================================================

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.state.location,
        animal: this.state.animal,
        breed: this.state.breed
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

  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = e => {
    this.setState({
      breed: e.target.value
    });
  };

  getBreeds = () => {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({ breeds: data.petfinder.breeds.breed });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  };

  clearSearchForm = () => {
    this.setState({
      location: "",
      animal: "",
      breeds: []
    });
  };

  render() {
    return (
      <Provider value={this.state}>
        <Router>
          <PageHeader
            path="/"
            search={this.search}
            clearSearchForm={this.clearSearchForm}
          />
          <Results path="/results" pets={this.state.pets} />
          <Contact path="/contact" />
        </Router>
      </Provider>
    );
  }
}

export default App;
