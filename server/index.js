import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema.js";
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
