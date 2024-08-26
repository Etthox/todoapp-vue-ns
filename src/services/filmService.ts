import {client } from '../apolloClient';
import { gql } from '@apollo/client/core';
import { QueryOptions } from '@apollo/client/core';

interface Film {
  title: string;
  releaseDate: string;  
}

interface PageInfo {
  endCursor: string | null;
  startCursor: string | null;
}

interface AllFilmsData {
  totalCount: number;
  films: Film[];
  pageInfo: PageInfo;
}

const GET_ALL_FILMS = gql`
  query AllFilms($after: String, $before: String, $first: Int, $last: Int) {
    allFilms(after: $after, before: $before, first: $first, last: $last) {
      totalCount
      films {
        title
        releaseDate
      }
      pageInfo {
        endCursor
        startCursor
      }
    }
  }
`;

export async function fetchFilms(after?: string, before?: string, first?: number, last?: number): Promise<AllFilmsData> {
  const { data } = await client.query({
    query: GET_ALL_FILMS,
    variables: {
      after,
      before,
      first,
      last
    },
  } as QueryOptions);

  console.log('Data returned from API:', data);

  return {
    totalCount: data.allFilms.totalCount,
    films: data.allFilms.films,
    pageInfo: data.allFilms.pageInfo
  };
}
