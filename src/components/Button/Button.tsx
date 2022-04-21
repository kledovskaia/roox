import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  action: () => void;
};

const Button: FC<Props> = ({ children, action }) => {
  return <button>{children}</button>;
};

export default memo(Button);
