import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchWine from "../queries/fetchWine";
import { Link } from "react-router";
import { FaChevronLeft, FaEdit } from "react-icons/fa/index";

class WineDetail extends Component {
  render() {
    const { wine } = this.props.data;
    console.log(wine);
    if (!wine) {
      return (
        <div className="container jumbtotronPadding">
          <div className="jumbotron">
            <h2 className="display-4">Loading...</h2>
          </div>
        </div>
      );
    }

    return (
      <div className="container jumbtotronPadding">
        <div className="jumbotron">
          <div className="row">
            <Link to="/">
              <FaChevronLeft />
              Back
            </Link>
          </div>
          <div className="column">
            <h4 className="right">
              Edit <FaEdit />
            </h4>
            <h1 className="display-3">{wine.name}</h1>
            <hr className="my-1 paddingBottom10" />

            <p>Year Made: {wine.yearMade}</p>
            <p>Date Purchased: {wine.datePurchased}</p>
            <p>Last Opened: {wine.lastOpened}</p>
            <p>Wine Type: {wine.wineType}</p>
            <p>Price: ${wine.price}</p>
            <p>Owned: {wine.owned ? "Yes" : "No"}</p>
            <p>Notes: {wine.notes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(fetchWine, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(WineDetail);
