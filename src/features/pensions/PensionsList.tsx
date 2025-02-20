import List from '../../components/List';
import type { Pension } from '../../remotes';
import PensionItem from './PensionItem';

interface PensionsListProps {
  pensions: Pension[] | undefined;
}

export default function PensionsList({ pensions }: PensionsListProps) {
  return (
    <List direction='vertical'>
      {pensions?.map((pension) => (
        <PensionItem key={pension.id} pension={pension} />
      ))}
    </List>
  );
}
