import gql from "graphql-tag";

export default gql`
  {
    wines {
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
