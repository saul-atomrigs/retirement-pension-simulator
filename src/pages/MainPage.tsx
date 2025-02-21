import { useNavigate } from '@tanstack/react-router';
import pigAnimation from '../../public/pig-animation.json';
import Txt from '../components/Txt';
import Lottie from 'react-lottie';
import CTAButton from '../components/CTAButton';

export default function AppContent() {
  const navigate = useNavigate();

  const lottieOptions = {
    animationData: pigAnimation,
    loop: true,
    autoplay: true,
  };

  return (
    <div className='container'>
      <Txt weight='bold' size='xl'>
        연금계산기
      </Txt>

      <Lottie options={lottieOptions} />

      <CTAButton
        onClick={() => navigate({ to: '/monthly-invest-amount-input' })}
      >
        시작 하기
      </CTAButton>
    </div>
  );
}
