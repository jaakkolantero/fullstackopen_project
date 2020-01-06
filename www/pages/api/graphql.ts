import { ApolloServer, gql } from "apollo-server-micro";
import { MockList } from "graphql-tools";
import casual from "casual-browserify";

const typeDefs = gql`
  type MenuItem {
    id: ID!
    name: String
    ingredients: [String]
    price: [Float]
  }
  type Query {
    hello: String
    menuItems: [MenuItem]
  }
`;

const resolvers = {
  Query: {
    hello: () => "Real Hello Workshop",
  },
};

const mocks = {
  MenuItem: () => ({
    id: () => casual.uuid,
    name: () => casual.name,
    ingredients: () => casual.array_of_words(4),
    price: () => new MockList(2),
  }),
  Query: () => ({
    menuItems: () => new MockList([5, 7]),
  }),
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
