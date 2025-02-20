import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import TextInput from '../components/TextInput';
import Txt from '../components/Txt';

export default function MonthlyInvestAmountInputPage() {
  const navigate = useNavigate();

  const initialMonthlyAmount = sessionStorage.getItem('monthlyAmount') || '';
  const [monthlyAmount, setMonthlyAmount] = useState(initialMonthlyAmount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMonthlyAmount(inputValue);
    sessionStorage.setItem('monthlyAmount', inputValue);
  };

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
        onChange={handleChange}
      />

      <CTAButton onClick={handleClickConfirm} disabled={!monthlyAmount}>
        연금 고르기
      </CTAButton>
    </div>
  );
}
