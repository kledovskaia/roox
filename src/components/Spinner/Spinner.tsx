import { FC, memo } from 'react';
import s from './Spinner.module.scss';

type Props = {
  loading: boolean;
};

const Spinner: FC<Props> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className={s.overlay}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default memo(Spinner);
