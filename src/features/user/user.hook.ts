import { useQuery } from '@tanstack/react-query';
import { getUserDataAPI } from '../../remotes';

export const useUser = () => {
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUserDataAPI,
  });

  return {
    user,
    userLoading,
  };
};
