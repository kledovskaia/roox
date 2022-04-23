import { FC, memo, ReactNode } from 'react';
import s from './Button.module.scss';

type Props = {
  children: ReactNode;
  action: () => void;
};

const Button: FC<Props> = ({ children, action }) => {
  return (
    <button
      onClick={action}
      onKeyDown={(e) => {
        if (e.key === 'Enter') action();
      }}
      className={s.button}
    >
      {children}
    </button>
  );
};

export default memo(Button);
