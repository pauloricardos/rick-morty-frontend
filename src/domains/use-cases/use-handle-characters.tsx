import { useRetrieveCharacters } from '../../services/use-retrieve-characters';
import { useFiltersContextProvider } from '../../contexts/filters-context';

export const useHandleCharacters = () => {
  const { filters, page, setPage, setFilters } = useFiltersContextProvider();
  const { characters, pagination, isError, isLoading } = useRetrieveCharacters({
    filter: filters,
    page,
  });

  return {
    characters,
    pagination,
    setPage,
    setFilters,
    page,
    filters,
    isError,
    isLoading,
  };
};
