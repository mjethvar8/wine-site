const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;
const WineType = require("./wine_type");
const Wine = mongoose.model("wine");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    wines: {
      type: new GraphQLList(WineType),
      resolve() {
        return Wine.find({});
      }
    },
    wine: {
      type: WineType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Wine.findById(id);
      }
    },
    winesOwned: {
      type: new GraphQLList(WineType),
      args: { owned: { type: new GraphQLNonNull(GraphQLBoolean) } },
      resolve(parentValue, { owned }) {
        return Wine.find({ owned });
      }
    }
  })
});

module.exports = RootQuery;
