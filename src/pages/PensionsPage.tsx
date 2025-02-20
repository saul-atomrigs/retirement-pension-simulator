import Loading from '../components/Loading';
import Txt from '../components/Txt';
import List from '../components/List';
import Box from '../components/Box';
import { useUser } from '../features/user/user.hook';
import usePensions from '../features/pensions/Pensions.hooks';

export default function PensionsPage() {
  const { user, userLoading } = useUser();
  const { pensions, pensionsLoading } = usePensions();

  if (userLoading) return <Loading message='사용자 데이터 불러오는중' />;
  if (pensionsLoading) return <Loading message='연금 상품 불러오는중' />;

  return (
    <div className='container'>
      <Txt weight='bold' size='2xl' style={{ marginBottom: '2rem' }}>
        {user?.firstName}님의 연금 상품을 골라주세요
      </Txt>

      <List direction='vertical'>
        {pensions?.map((pension) => (
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
        ))}
      </List>
    </div>
  );
}
