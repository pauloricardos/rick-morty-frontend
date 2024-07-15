import { Filters } from '../domains/character';
import { Dispatch, SetStateAction } from 'react';

export type RetrieveCharactersParams = {
  page: number;
  filters: Filters;
  setPage: Dispatch<SetStateAction<number>>;
  setFilters: Dispatch<SetStateAction<Filters>>;
};
