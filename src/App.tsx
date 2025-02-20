import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './features/user/user.hook';
import './App.css';

const queryClient = new QueryClient();

function AppContent() {
  const { data: user, isLoading, error } = useUser();

  console.log({ user, isLoading, error });

  return <div className='App'></div>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
