import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { petfinder } from "./Api";
import { ANIMALS } from "petfinder-client";

class SearchForm extends Component {
  state = {
    location: "Novato, CA",
    animal: "",
    breed: "",
    breeds: []
  };

  handleSubmit = e => {
    e.preventDefault();
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

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({
            breeds: []
          });
        }
      });
    } else {
      this.setState({
        breeds: []
      });
    }
  }

  render() {
    const { breeds } = this.state;
    console.log("BREEDS ====>", breeds);

    return (
      <Form style={{ marginTop: "50px" }}>
        <Form.Field>
          <label>Location</label>
          <input
            placeholder="City, State"
            type="text"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
        </Form.Field>

        <Form.Field
          id="animal"
          label="Animal"
          control="select"
          value={this.state.animal}
          onChange={this.handleAnimalChange}
          onBlur={this.handleAnimalChange}
        >
          <option />
          {ANIMALS.map(animal => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </Form.Field>

        <Form.Field
          id="breed"
          label="Breeds"
          control="select"
          value={this.state.breed}
          onChange={this.handleBreedChange}
          onBlur={this.handleBreedChange}
          disabled={!this.state.breeds.length}
        >
          {breeds.map(breed => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SearchForm;
