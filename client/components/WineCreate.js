import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchWines";
import { FaChevronLeft, FaEdit } from "react-icons/fa/index";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      yearMade: [],
      datePurchased: [],
      wineType: [],
      notes: [],
      price: [],
      owned: []
    };
  }

  onSubmit(event) {
    const { mutate } = this.props;
    event.preventDefault();
    console.log(event);
    mutate({
      variables: {
        name: this.state.name
      },
      refetchQueries: [{ query }]
    })
      .then(() => {
        hashHistory.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <Link to="/">
              <FaChevronLeft />
              Back
            </Link>
          </div>
          <h3>Add a new wine</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="formGroup">
              <label>Name</label>
              <input
                onChange={event => this.setState({ name: event.target.value })}
                value={this.state.name}
              />

              {/* <label>Year Made:</label>
              <input
                onChange={event =>
                  this.setState({ yearMade: event.target.value })
                }
                value={this.state.yearMade}
              />

              <label>Date of Purchase:</label>
              <input
                onChange={event =>
                  this.setState({ datePurchased: event.target.value })
                }
                value={this.state.datePurchased}
              />

              <label>Wine Type:</label>
              <input
                onChange={event =>
                  this.setState({ wineType: event.target.value })
                }
                value={this.state.wineType}
              />

              <label>Notes or Comments:</label>
              <input
                onChange={event => this.setState({ notes: event.target.value })}
                value={this.state.notes}
              />

              <label>Price:</label>
              <input
                onChange={event => this.setState({ price: event.target.value })}
                value={this.state.price}
              />

              <label>Owned:</label>
              <input
                onChange={event => this.setState({ owned: event.target.value })}
                value={this.state.owned}
              /> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddWine($name: String) {
    addWine(name: $name) {
      id
    }
  }
`;

export default graphql(mutation)(SongCreate);
