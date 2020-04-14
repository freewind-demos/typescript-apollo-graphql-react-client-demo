import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react'
import ExchangeRates from './ExchangeRates';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default function Hello() {
  return <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates/>
    </div>
  </ApolloProvider>
};
