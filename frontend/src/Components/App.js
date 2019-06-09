import React from 'react';
import Router from './Router'
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo-hooks';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} />
    </div>
  );
  
}
