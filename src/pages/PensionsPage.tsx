import Loading from '../components/Loading';
import Txt from '../components/Txt';
import { useUser } from '../features/user/user.hook';

export default function PensionsPage() {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Loading message='Loading user data...' />;

  return (
    <div className='container'>
      <Txt weight='bold' size='2xl'>
        {user?.firstName}님의 연금 상품을 골라주세요
      </Txt>
    </div>
  );
}
