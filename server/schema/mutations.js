const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;
const mongoose = require("mongoose");
const Wine = mongoose.model("wine");
const WineType = require("./wine_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addWine: {
      type: WineType,
      args: {
        name: { type: GraphQLString }
        // yearMade: { type: GraphQLInt },
        // datePurchased: { type: GraphQLString },
        // notes: { type: GraphQLString },
        // wineType: { type: GraphQLString },
        // price: { type: GraphQLFloat },
        // owned: { type: GraphQLBoolean }
      },
      resolve(
        parentValue,
        { name /*yearMade, datePurchased, notes, wineType, owned, price*/ }
      ) {
        return new Wine({
          name
          // yearMade,
          // datePurchased,
          // notes,
          // wineType,
          // owned,
          // price
        }).save();
      }
    },
    deleteWine: {
      type: WineType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Wine.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
