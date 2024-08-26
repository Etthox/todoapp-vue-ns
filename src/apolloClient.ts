import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Crie o link HTTP para a sua API GraphQL
export const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });
  