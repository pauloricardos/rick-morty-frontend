import { FiltersContextProvider } from '../../../contexts/filters-context';
import { Header } from '../../../components/header/header';
import { CharacterList } from '../character-list/character-list';
import { Pagination } from '../pagination/pagination.tsx';
import { useHandleCharacters } from '../../use-cases/use-handle-characters';
import { ErrorScreen } from '../../../components/error-screen/error-screen';
import './styles.css';

export const BrowseCharacters = () => {
  const { isError } = useHandleCharacters();

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <FiltersContextProvider>
      <Header />
      <main className="content">
        <CharacterList />
        <Pagination />
      </main>
    </FiltersContextProvider>
  );
};
