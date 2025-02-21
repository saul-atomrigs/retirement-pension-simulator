import { useState } from 'react';

export default function useMonthlyInvest() {
  const initialMonthlyAmount = sessionStorage.getItem('monthlyAmount') || '';
  const [monthlyAmount, setMonthlyAmount] = useState(initialMonthlyAmount);

  const handleChangeMonthlyInvest = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setMonthlyAmount(inputValue);
    sessionStorage.setItem('monthlyAmount', inputValue);
  };

  const clearMonthlyInvest = () => {
    sessionStorage.removeItem('monthlyAmount');
  };

  return {
    monthlyAmount,
    handleChangeMonthlyInvest,
    clearMonthlyInvest,
  };
}
