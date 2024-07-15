import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { RetrieveCharactersParams } from './types';

const initialFilters: RetrieveCharactersParams = {
  page: 1,
  filters: {
    name: '',
    gender: '',
    species: '',
    status: '',
  },
  setFilters: () => {},
  setPage: () => {},
};

export const FiltersContext = createContext(initialFilters);

export const FiltersContextProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState(initialFilters.page);
  const [filters, setFilters] = useState(initialFilters.filters);

  const data: RetrieveCharactersParams = {
    page,
    setPage,
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={data}>{children}</FiltersContext.Provider>
  );
};

export const useFiltersContextProvider = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error(
      'useFiltersContextProvider must be used within a FiltersContextProvider'
    );
  }
  return context;
};
