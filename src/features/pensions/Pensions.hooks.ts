import { useQuery } from '@tanstack/react-query';
import { getPensionsAPI } from '../../remotes';

export default function usePensions() {
  const { data: pensions, isLoading: pensionsLoading } = useQuery({
    queryKey: ['pensions'],
    queryFn: getPensionsAPI,
  });

  return {
    pensions,
    pensionsLoading,
  };
}
