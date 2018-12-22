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
              <Icon name="paw" style={{ color: "#082341" }} />
              <Header.Content
                style={{
                  fontFamily: "'Gochi Hand', cursive",
                  fontSize: "3.5rem",
                  color: "#FFB400"
                }}
              >
                ADOPT ME
                <Header.Subheader style={{ color: "#082341" }}>
                  Thousands of adoptable pets are looking for people. People
                  Like You
                </Header.Subheader>
              </Header.Content>
            </Header>
            <SearchForm
              // search={this.props.search}
              clearSearchForm={this.props.clearSearchForm}
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default PageHeader;
