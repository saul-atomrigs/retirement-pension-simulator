import Button from './Button';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  onClick,
  disabled,
}: CTAButtonProps) {
  return (
    <div className='cta-button-container'>
      <Button fullWidth onClick={onClick} disabled={disabled}>
        {children}
      </Button>
      <style>{`
        .cta-button-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
