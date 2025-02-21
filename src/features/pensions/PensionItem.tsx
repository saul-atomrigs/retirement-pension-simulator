import Box from '../../components/Box';
import Checkbox from '../../components/Checkbox';
import Txt from '../../components/Txt';
import type { Pension } from '../../remotes';

interface PensionItemProps {
  pension: Pension;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function PensionItem({
  pension,
  isSelected,
  onSelect,
}: PensionItemProps) {
  return (
    <Box
      key={pension.id}
      onClick={() => onSelect(isSelected ? '' : pension.id)}
      style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
    >
      <Checkbox
        checked={isSelected}
        onChange={() => onSelect(isSelected ? '' : pension.id)}
      />
      <div>
        <Txt weight='bold' size='lg'>
          {pension.name}
        </Txt>
        <Txt size='sm' style={{ marginTop: '0.5rem' }}>
          종류: {pension.type}
        </Txt>
        <Txt size='sm'>예상 수익률: {pension.expectedReturn}%</Txt>
        <Txt size='sm'>
          가입 가능 연령: {pension.minAge}세 ~ {pension.maxAge}세
        </Txt>
      </div>
    </Box>
  );
}
