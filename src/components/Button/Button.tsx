import { FC, KeyboardEvent, memo, ReactNode, useCallback } from 'react';
import s from './Button.module.scss';

type Props = {
  children: ReactNode;
  action?: () => void;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
};

const Button: FC<Props> = ({ children, action, disabled, type }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') action?.();
  }, []);

  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      onClick={action}
      onKeyDown={handleKeyDown}
      className={s.button}
    >
      {children}
    </button>
  );
};

export default memo(Button);
