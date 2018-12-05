import gql from "grpahql-tag";

export default gql`
  query WineQuery($id: ID!) {
    wine(id: $id) {
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