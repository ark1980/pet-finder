import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Results from "./Results";
import { petfinder } from "./Api";

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
      <div>
        <PageHeader />
        <Results pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
