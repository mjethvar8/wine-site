import gql from "graphql-tag";

export default gql`
  query WinesOwned($owned: Boolean!) {
    winesOwned(owned: $owned) {
      id
      name
      yearMade
      datePurchased
      lastOpened
      wineType
      notes
      price
      owned
    }
  }
`;
