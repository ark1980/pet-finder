import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";

class Pet extends Component {
  render() {
    const { name, animal, breed, age, location, media } = this.props;
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    const hero = photos[0] ? photos[0].value : "http://placecorgi.com/300/300";

    return (
      <Grid celled style={{ margin: "2rem 0" }}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={hero} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as="h2" style={{ color: "#008080" }}>
              {name} - {animal}
            </Header>
            <Header as="h3">Location: {location}</Header>
            <Header as="h3">Age: {age}</Header>
            <Header as="h3">Breeds: {breed}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Pet;
