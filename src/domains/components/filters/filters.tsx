import { useSearchCharacters } from '../../use-cases/use-search-characters';
import './styles.css';

export const Filters = () => {
  const { filters, handleSelectOption, handleSearch } = useSearchCharacters();

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search by character name..."
          onChange={handleSearch}
        />
      </div>
      <div className="filters">
        <select
          id="gender"
          onChange={handleSelectOption}
          value={filters.gender}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          id="status"
          onChange={handleSelectOption}
          value={filters.status}
        >
          <option value="">Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          id="species"
          onChange={handleSelectOption}
          value={filters.species}
        >
          <option value="">Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
          <option value="animal">Animal</option>
        </select>
      </div>
    </>
  );
};
