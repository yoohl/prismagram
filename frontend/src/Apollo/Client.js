import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from "./LocalState";

// 클라이언트 생성
export default new ApolloClient({ 
    uri: 'http://instagram-api.webchemist.net/',

    clientState: {
        defaults,
        resolvers
    }
});