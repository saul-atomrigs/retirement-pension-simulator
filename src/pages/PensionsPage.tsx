import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import Loading from '../components/Loading';
import Txt from '../components/Txt';
import usePensions from '../features/pensions/Pensions.hooks';
import PensionsList from '../features/pensions/PensionsList';
import { useUser } from '../features/user/user.hook';

export default function PensionsPage() {
  const { user, userLoading } = useUser();
  const { pensions, pensionsLoading } = usePensions();

  const [selectedPensionId, setSelectedPensionId] = useState('');

  if (userLoading) return <Loading message='사용자 데이터 불러오는중' />;
  if (pensionsLoading) return <Loading message='연금 상품 불러오는중' />;

  return (
    <div className='container'>
      <Txt weight='bold' size='2xl' style={{ marginBottom: '2rem' }}>
        {user?.firstName}님의 연금 상품을 골라주세요
      </Txt>

      <PensionsList
        pensions={pensions}
        selectedPensionId={selectedPensionId}
        onSelect={setSelectedPensionId}
      />

      <CTAButton
        onClick={() => console.log('선택 완료')}
        disabled={!selectedPensionId}
      >
        선택 완료
      </CTAButton>
    </div>
  );
}
