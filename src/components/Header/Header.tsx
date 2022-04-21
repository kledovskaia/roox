import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return <header>{children}</header>;
};

export default memo(Header);
