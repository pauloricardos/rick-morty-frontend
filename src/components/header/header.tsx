import { Filters } from '../../domains/components/filters/filters';
import './styles.css'

export const Header = () => {
  return (
    <header className="header">
      <h1>Rick and Morty Characters</h1>
      <Filters />
    </header>
  );
};
