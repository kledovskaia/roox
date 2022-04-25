import classNames from 'classnames';
import { FC, KeyboardEvent, memo, ReactNode, useCallback } from 'react';
import s from './Button.module.scss';

enum Modificators {
  disabled,
  submit,
}

type Props = {
  children: ReactNode;
  action?: () => void;
  type?: 'button' | 'reset' | 'submit';
} & {
  [key in keyof typeof Modificators]?: boolean;
};

const Button: FC<Props> = ({ children, action, type, ...modificators }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter') action?.();
    },
    [action]
  );

  return (
    <button
      type={type || 'button'}
      disabled={modificators?.disabled}
      onClick={action}
      onKeyDown={handleKeyDown}
      className={classNames(
        s.button,
        Object.fromEntries(
          Object.keys(Modificators).map((key) => [
            s[`button_${key}`],
            modificators[key as keyof typeof modificators],
          ])
        )
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
