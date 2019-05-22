require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

// const typeDefs = `
//   type Query{
//     hello : String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "hi yoohl"
//   }
// }

// graphql 서버, express서버 내장됨
const server = new GraphQLServer({ schema })

server.express.use(logger("dev"))

server.start({ port: PORT }, () => 
  console.log(`Server running! on port http://localhost:${ PORT }`)
);