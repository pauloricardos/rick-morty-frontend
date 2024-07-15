import { CharacterCardProps } from './types';
import './styles.css'

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="character-card" key={character.id}>
      <img src={character.image} alt={character.name} />
      <div className="card-content">
        <h2>{character.name}</h2>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
      </div>
    </div>
  );
};
