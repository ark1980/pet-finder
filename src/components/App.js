import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Results from "./Results";
import { petfinder } from "./Api";
import { Router } from "@reach/router";
import Contact from "./Contact";

class App extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    petfinder.pet
      .find({
        output: "full",
        location: "Seattle, WA"
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
  }

  render() {
    return (
      <Router>
        <PageHeader path="/" />
        <Results path="/results" pets={this.state.pets} />
        <Contact path="/contact" />
      </Router>
    );
  }
}

export default App;
