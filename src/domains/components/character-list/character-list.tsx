import { useHandleCharacters } from '../../use-cases/use-handle-characters';
import { NoDataFound } from '../../../components/no-data-found/no-data-found';
import { SkeletonList } from '../../../components/skeleton-list/skeleton-list';
import { CharacterCard } from '../character-card/character-card';
import './styles.css';

export const CharacterList = () => {
  const { characters, isLoading } = useHandleCharacters();

  if (characters?.length === 0) {
    return <NoDataFound />;
  }

  if (isLoading) {
    return <SkeletonList />;
  }

  return (
    <div className="character-list">
      {characters?.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
    </div>
  );
};
