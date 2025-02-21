import { useState } from 'react';
import { simulatePensionAPI } from '../../remotes';
import { useUser } from '../user/user.hook';

export function useSimulation(monthlyAmount?: string) {
  const { user } = useUser();
  const [simulating, setSimulating] = useState(false);
  const [selectedPensionId, setSelectedPensionId] = useState('');

  const handleSelectPension = (pensionId: string) => {
    setSelectedPensionId(pensionId);
  };

  const handleSimulation = async () => {
    if (!user || !selectedPensionId || !monthlyAmount) return null;

    setSimulating(true);
    try {
      const result = await simulatePensionAPI({
        pensionId: selectedPensionId,
        age: user.age,
        retirementAge: user.retirementAge,
        monthlyInvestment: parseInt(monthlyAmount, 10),
      });
      return result;
    } catch (error) {
      console.error('Simulation failed:', error);
      return null;
    } finally {
      setSimulating(false);
    }
  };

  return {
    simulating,
    selectedPensionId,
    handleSelectPension,
    handleSimulation,
  };
}
