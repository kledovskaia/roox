import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import s from './UserPreview.module.scss';

type Props = {
  user: FetchedUser;
};

const UserPreview: FC<Props> = ({ user }) => {
  return (
    <section className={s.user}>
      <ul className={s.user__list}>
        <li className={s.user__listItem}>
          <span className={s.user__title}>ФИО:</span>
          <span className={s.user__value}>{user.name}</span>
        </li>
        <li className={s.user__listItem}>
          <span className={s.user__title}>город:</span>
          <span className={s.user__value}>{user.address.city}</span>
        </li>
        <li className={s.user__listItem}>
          <span className={s.user__title}>компания:</span>
          <span className={s.user__value}>{user.company.name}</span>
        </li>
      </ul>
      <Link className={s.user__link} to={user.username}>
        Подробнее
      </Link>
    </section>
  );
};

export default memo(UserPreview);
