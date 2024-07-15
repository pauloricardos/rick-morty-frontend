import { useFiltersContextProvider } from '../../contexts/filters-context';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

export const useSearchCharacters = () => {
  const { setFilters, filters } = useFiltersContextProvider();
  const [searchTerm, setSearchTerm] = useState(filters.name);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase().trim());
  };

  const handleSelectOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      name: debouncedSearchTerm,
    }));
  }, [debouncedSearchTerm, setFilters]);

  return {
    handleSearch,
    handleSelectOption,
    filters,
  };
};
