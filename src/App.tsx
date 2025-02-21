import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import CTAButton from './components/CTAButton';
import { useNavigate } from '@tanstack/react-router';
import Txt from './components/Txt';

const queryClient = new QueryClient();

function AppContent() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Txt weight='bold' size='xl'>
        연금계산기
      </Txt>

      <CTAButton
        onClick={() => navigate({ to: '/monthly-invest-amount-input' })}
      >
        시작 하기
      </CTAButton>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
