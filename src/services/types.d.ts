import { Character, Filters, Pagination } from '../domains/character';

export type UseRetrieveCharactersParams = {
  page: number;
  filter: Filters;
};

export type ApiResponse = {
  characters: {
    results: Character[];
    info: Pagination;
  };
};

export type UseRetrieveCharactersResult = {
  characters?: Character[];
  pagination?: Pagination;
  isError: boolean;
  isLoading: boolean;
};
