import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { petfinder } from "./Api";

class SearchForm extends Component {
  state = {
    location: "",
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

  render() {
    const { animal, breeds } = this.state;

    console.log("BREEDS ====>", breeds);

    return (
      <Form style={{ marginTop: "50px" }} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Location</label>
          <input
            placeholder="City, State"
            type="text"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
        </Form.Field>

        {/* Radio Buttons */}
        <Form.Group inline>
          <label>Animal</label>
          <Form.Field
            type="radio"
            control="input"
            value="dog"
            checked={animal === "dog"}
            label="Dog"
            onChange={this.handleAnimalChange}
          />
          <Form.Field
            type="radio"
            control="input"
            value="cat"
            checked={animal === "cat"}
            label="Cat"
            onChange={this.handleAnimalChange}
          />
          <Form.Field
            type="radio"
            control="input"
            value="bird"
            checked={animal === "bird"}
            label="Bird"
            onChange={this.handleAnimalChange}
          />
          <Form.Field
            type="radio"
            control="input"
            value="horse"
            checked={animal === "horse"}
            label="Horse"
            onChange={this.handleAnimalChange}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control="select"
            placeholder="Breeds"
            label="Breeds"
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={!this.state.breeds.length}
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </Form.Field>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SearchForm;
