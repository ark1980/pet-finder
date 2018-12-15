import React, { Component } from "react";
import { Container, Grid, Image, Header } from "semantic-ui-react";

class Results extends Component {
  render() {
    console.log(this.props.pets);
    return (
      <Container style={{ margin: "5rem auto" }}>
        <Header as="h1">Results</Header>
        <Grid celled style={{ margin: "2rem 0" }}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={13}>
              <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Results;
