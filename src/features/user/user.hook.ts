import { useQuery } from '@tanstack/react-query';
import { getUserDataAPI } from '../../remotes';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserDataAPI,
  });
};
