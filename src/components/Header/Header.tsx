import { FC, memo, ReactNode } from 'react';
import s from './Header.module.scss';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};

export default memo(Header);
