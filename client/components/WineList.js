import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchWines";
import { FaTrash } from "react-icons/fa/index";

class WineList extends Component {
  onWineDelete(id) {
    const { mutate } = this.props;

    mutate({
      variables: {
        id
      }
    }).then(() => {
      this.props.data.refetch();
    });
  }

  renderWines() {
    const { wines } = this.props.data;

    return wines.map(({ id, name, yearMade, datePurchased, lastOpened }) => {
      datePurchased = new Date(datePurchased).toUTCString();
      datePurchased = datePurchased
        .split(" ")
        .slice(0, 4)
        .join(" ");

      return (
        <li className="list-group-item" key={id}>
          <div>
            <Link to={`/wines/${id}`}>{name}</Link>
            <p>Year Made: {yearMade}</p>
            <p>Last Opened: {lastOpened}</p>
            <p>Date Purchased: {datePurchased}</p>

            <FaTrash onClick={() => this.onWineDelete(id)} />
          </div>
        </li>
      );
    });
  }

  render() {
    const { loading } = this.props.data;

    if (loading) {
      return (
        <div className="container" style={{ padding: 10 }}>
          <div className="jumbotron">
            <h1 className="display-4">Loading...</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="container" style={{ padding: 10 }}>
        <div className="jumbotron">
          <h1 className="display-4">AJ's Wines</h1>
          <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
              <ul className="list-group">{this.renderWines()}</ul>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 lgicustom">
              <p>Sidebar goes here</p>
            </div>
          </div>
          <Link to="wines/new">Add New Wine</Link>
        </div>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteWine($id: ID) {
    deleteWine(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(WineList));
