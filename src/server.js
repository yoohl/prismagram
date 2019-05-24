require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4001;

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

/* 
api 폴더
Query(.graphql) : 어떤 사용자가 Query에 이름을 보내면(hello) String을 보낸다는 설명을 했을뿐, schema
resolvers(.js) : Query의 기능성을 프로그래밍 해야함(hello -> hi yoohl) 
*/


// graphql 서버, express서버 내장됨
const server = new GraphQLServer({ schema })
server.express.use(logger("dev"))
server.start({ port: PORT }, () => 
  console.log(`Server running! on port http://localhost:${ PORT }`)
);