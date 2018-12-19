import React, { Component } from "react";
import { Segment, Header, Icon } from "semantic-ui-react";
import "../main.css";
import SearchForm from "./SearchForm";

class PageHeader extends Component {
  render() {
    return (
      <div className="hero">
        <Segment.Group compact style={{ marginLeft: "90px" }}>
          <Segment style={{ padding: "50px" }}>
            <Header as="h1">
              <Icon name="paw" style={{ color: "#0D2C54" }} />
              <Header.Content
                style={{
                  fontFamily: "'Gochi Hand', cursive",
                  fontSize: "3.5rem",
                  color: "#FFB400"
                }}
              >
                ADOPT ME
                <Header.Subheader style={{ color: "#0D2C54" }}>
                  Thousands of adoptable pets are looking for people. People
                  Like You
                </Header.Subheader>
              </Header.Content>
            </Header>
            <SearchForm search={this.props.search} />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default PageHeader;
