import { gql } from 'graphql-request';
import {
  keepPreviousData,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { client } from './http-client.ts';
import {
  ApiResponse,
  UseRetrieveCharactersParams,
  UseRetrieveCharactersResult,
} from './types';

const RETRIEVE_CHARACTERS_QUERY = gql`
  query useRetrieveCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        next
        prev
      }
      results {
        id
        name
        gender
        image
        status
        species
        type
      }
    }
  }
`;

export const useRetrieveCharacters = (
  variables: UseRetrieveCharactersParams
): UseRetrieveCharactersResult => {
  const { data, isError, isLoading }: UseQueryResult<ApiResponse> = useQuery({
    queryKey: ['retrieveCharacters', { ...variables }],
    queryFn: async () => {
      return await client.request(RETRIEVE_CHARACTERS_QUERY, variables);
    },
    placeholderData: keepPreviousData,
  });

  return {
    characters: data?.characters.results,
    pagination: data?.characters.info,
    isError,
    isLoading,
  };
};
