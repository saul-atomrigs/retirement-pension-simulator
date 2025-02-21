import { useNavigate } from '@tanstack/react-router';
import CTAButton from '../components/CTAButton';
import TextInput from '../components/TextInput';
import Txt from '../components/Txt';
import useMonthlyInvest from '../features/monthly-invest/MonthlyInvest.hooks';

export default function MonthlyInvestAmountInputPage() {
  const navigate = useNavigate();
  const { monthlyAmount, handleChangeMonthlyInvest } = useMonthlyInvest();

  const handleClickConfirm = () => {
    navigate({ to: '/pensions', search: { monthlyAmount } });
  };

  return (
    <div className='container'>
      <Txt weight='bold' size='xl'>
        월금액을 입력해주세요
      </Txt>

      <TextInput
        name='월금액'
        type='number'
        value={monthlyAmount}
        onChange={handleChangeMonthlyInvest}
        autoFocus
      />

      <CTAButton onClick={handleClickConfirm} disabled={!monthlyAmount}>
        연금 고르기
      </CTAButton>
    </div>
  );
}
