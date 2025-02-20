import CTAButton from '../components/CTAButton';
import { useNavigate } from '@tanstack/react-router';
import Txt from '../components/Txt';
import TextInput from '../components/TextInput';
import { useState } from 'react';

export default function MonthlyInvestAmountInputPage() {
  const navigate = useNavigate();
  const [monthlyAmount, setMonthlyAmount] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyAmount(e.target.value);
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

      <CTAButton onClick={() => navigate({ to: '/pensions' })}>
        연금 고르기
      </CTAButton>
    </div>
  );
}
