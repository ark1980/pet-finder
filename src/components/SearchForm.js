import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Consumer } from "./SearchContext";

class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => {
          return (
            <Form style={{ marginTop: "50px" }} onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Location</label>
                <input
                  placeholder="City, State"
                  type="text"
                  value={context.location}
                  onChange={context.handleLocationChange}
                />
              </Form.Field>

              {/* Radio Buttons */}
              <Form.Group inline>
                <label>Animal</label>
                <Form.Field
                  type="radio"
                  control="input"
                  value="dog"
                  checked={context.animal === "dog"}
                  label="Dog"
                  onChange={context.handleAnimalChange}
                />
                <Form.Field
                  type="radio"
                  control="input"
                  value="cat"
                  checked={context.animal === "cat"}
                  label="Cat"
                  onChange={context.handleAnimalChange}
                />
                <Form.Field
                  type="radio"
                  control="input"
                  value="bird"
                  checked={context.animal === "bird"}
                  label="Bird"
                  onChange={context.handleAnimalChange}
                />
                <Form.Field
                  type="radio"
                  control="input"
                  value="horse"
                  checked={context.animal === "horse"}
                  label="Horse"
                  onChange={context.handleAnimalChange}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  control="select"
                  placeholder="Breeds"
                  label="Breeds"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length}
                >
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </Form.Field>
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
