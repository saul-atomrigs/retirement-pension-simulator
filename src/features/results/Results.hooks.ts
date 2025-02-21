import { useState, useEffect } from 'react';
import type { SimulationResponse } from '../../remotes';

export default function useSimulationResults() {
  const [simulationResult, setSimulationResult] =
    useState<SimulationResponse>();

  useEffect(() => {
    const storedResult = sessionStorage.getItem('simulationResult');
    if (!storedResult) {
      return;
    }
    setSimulationResult(JSON.parse(storedResult));
  }, []);

  return {
    simulationResult,
  };
}
