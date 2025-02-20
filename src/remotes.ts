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
