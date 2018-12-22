import React, { Component } from "react";
import Pet from "./Pet";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Container, Header, Accordion, Icon } from "semantic-ui-react";
import { Consumer } from "./SearchContext";
import SearchForm from "./SearchForm";

class Results extends Component {
  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    // console.log("PETS ===>", this.state.pets);
    return (
      <div>
        <NavHeader />
        <Consumer>
          {context => (
            <Container style={{ margin: "10rem auto" }}>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Search Again
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <SearchForm />
                </Accordion.Content>
              </Accordion>
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
