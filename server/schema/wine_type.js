const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;
const Wines = mongoose.model("wine");

const WineType = new GraphQLObjectType({
  name: "WineType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    yearMade: { type: GraphQLInt },
    datePurchased: { type: GraphQLString },
    notes: { type: GraphQLString },
    wineType: { type: GraphQLString },
    lastOpened: { type: GraphQLString },
    price: { type: GraphQLFloat },
    owned: { type: GraphQLBoolean }
  })
});

module.exports = WineType;
