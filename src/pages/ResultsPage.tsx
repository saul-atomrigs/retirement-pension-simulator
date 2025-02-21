import Txt from '../components/Txt';
import Box from '../components/Box';
import { colors } from '../design-tokens';
import CTAButton from '../components/CTAButton';
import useSimulationResults from '../features/results/Results.hooks';
import { useNavigate } from '@tanstack/react-router';
import useMonthlyInvest from '../features/monthly-invest/MonthlyInvest.hooks';

export default function ResultsPage() {
  const navigate = useNavigate();
  const { simulationResult } = useSimulationResults();
  const { clearMonthlyInvest } = useMonthlyInvest();

  const handleClickRestart = () => {
    clearMonthlyInvest();
    navigate({ to: '/' });
  };

  if (!simulationResult) return null;

  return (
    <div className='container'>
      <Txt weight='bold' size='2xl' style={{ marginBottom: '2rem' }}>
        연금 시뮬레이션 결과
      </Txt>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box>
          <Txt size='lg'>총 투자금액</Txt>
          <Txt weight='bold' size='xl'>
            {simulationResult.finalAmount.toLocaleString()}원
          </Txt>
        </Box>

        <Box>
          <Txt size='lg'>예상 수익률</Txt>
          <Txt weight='bold' size='xl'>
            {simulationResult.expectedReturnRate}%
          </Txt>
        </Box>

        <Box>
          <Txt size='lg'>월 예상 연금</Txt>
          <Txt weight='bold' size='xl' style={{ color: colors['primary-600'] }}>
            {Math.floor(simulationResult.finalAmount / 240).toLocaleString()}원
          </Txt>
        </Box>

        <CTAButton onClick={handleClickRestart}>다시 계산하기</CTAButton>
      </div>
    </div>
  );
}
