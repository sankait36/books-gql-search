import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import './index.scss';
import App from './App';

const serverPort = process.env.GQL_SERVER_PORT || 4000;

const client = new ApolloClient({
  uri: `http://localhost:${serverPort}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          books: {
            merge(_, incoming) {
              return [...incoming];
            },
          },
        },
      },
    }
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
