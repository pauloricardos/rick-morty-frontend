import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowseCharacters } from './domains/components/browse-characters/browse-characters.tsx';
import './global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowseCharacters />
    </QueryClientProvider>
  );
}

export default App;
