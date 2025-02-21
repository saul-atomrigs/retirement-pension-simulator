import CTAButton from '../components/CTAButton';
import Loading from '../components/Loading';
import Txt from '../components/Txt';
import usePensions from '../features/pensions/Pensions.hooks';
import PensionsList from '../features/pensions/PensionsList';
import { useUser } from '../features/user/user.hook';
import { useSimulation } from '../features/simulation/Simulation.hooks';
import { useSearch, useNavigate } from '@tanstack/react-router';

type SearchParams = {
  monthlyAmount: string;
};

export default function PensionsPage() {
  const { monthlyAmount } = useSearch({ strict: false }) as SearchParams;
  const { user, userLoading } = useUser();
  const { pensions, pensionsLoading } = usePensions();
  const {
    simulating,
    selectedPensionId,
    handleSelectPension,
    handleSimulation,
  } = useSimulation(monthlyAmount);
  const navigate = useNavigate();

  if (userLoading) return <Loading message='사용자 데이터 불러오는중' />;
  if (pensionsLoading) return <Loading message='연금 상품 불러오는중' />;
  if (simulating) return <Loading message='연금 시뮬레이션 진행중' />;

  const handleComplete = async () => {
    const result = await handleSimulation();
    if (result) {
      sessionStorage.setItem('simulationResult', JSON.stringify(result));
      navigate({ to: '/results' });
    }
  };

  return (
    <div className='container'>
      <Txt weight='bold' size='2xl' style={{ marginBottom: '2rem' }}>
        매월 {monthlyAmount}원으로 {user?.firstName}님의 연금 상품을 골라주세요
      </Txt>

      <PensionsList
        pensions={pensions}
        selectedPensionId={selectedPensionId}
        onSelect={handleSelectPension}
      />

      <CTAButton onClick={handleComplete} disabled={!selectedPensionId}>
        선택 완료
      </CTAButton>
    </div>
  );
}
