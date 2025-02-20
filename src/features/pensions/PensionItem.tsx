import Box from '../../components/Box';
import Txt from '../../components/Txt';
import type { Pension } from '../../remotes';

interface PensionItemProps {
  pension: Pension;
}

export default function PensionItem({ pension }: PensionItemProps) {
  return (
    <Box
      key={pension.id}
      onClick={() => console.log('Selected:', pension.name)}
    >
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
    </Box>
  );
}
