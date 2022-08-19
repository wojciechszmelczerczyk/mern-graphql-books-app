import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import connection from "./db/connection.js";

connection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: ["http://localhost:3000", "http://localhost:4000"],
  },
});

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
