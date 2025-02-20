import CTAButton from '../components/CTAButton';
import { useNavigate } from '@tanstack/react-router';

export default function MonthlyInvestAmountInputPage() {
  const navigate = useNavigate();

  return (
    <div>
      <CTAButton onClick={() => navigate({ to: '/pensions' })}>
        연금 고르기
      </CTAButton>
    </div>
  );
}
