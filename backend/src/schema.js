import path from "path"; 
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas"


/* 
api 폴더의 모든 graphql, js 파일들을 schema 파일에서 한번에 받음 
*/
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolves = fileLoader(path.join(__dirname, "/api/**/*.js"));

const executableSchema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolves),
});

export default executableSchema;
