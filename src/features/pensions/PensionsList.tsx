import List from '../../components/List';
import type { Pension } from '../../remotes';
import PensionItem from './PensionItem';

interface PensionsListProps {
  pensions: Pension[] | undefined;
  selectedPensionId: string;
  onSelect: (id: string) => void;
}

export default function PensionsList({
  pensions,
  selectedPensionId,
  onSelect,
}: PensionsListProps) {
  return (
    <List direction='vertical'>
      {pensions?.map((pension) => (
        <PensionItem
          key={pension.id}
          pension={pension}
          isSelected={pension.id === selectedPensionId}
          onSelect={onSelect}
        />
      ))}
    </List>
  );
}
