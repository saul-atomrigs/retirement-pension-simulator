export interface Pension {
  id: string;
  name: string;
  type: string;
  expectedReturn: number;
  minAge: number;
  maxAge: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  retirementAge: number;
  investmentStyle: 'stable' | 'balanced' | 'aggressive';
}

export const getUserDataAPI = async (): Promise<User> => {
  const response = await fetch('/user');
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

export const getPensionsAPI = async (): Promise<Pension[]> => {
  const response = await fetch('/pensions');
  if (!response.ok) {
    throw new Error('Failed to fetch pensions data');
  }
  return response.json();
};
