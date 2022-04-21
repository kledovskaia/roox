import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  user: User;
};

const UserPreview: FC<Props> = ({ user }) => {
  return (
    <section>
      <ul>
        <li>ФИО: {user.name}</li>
        <li>город: {user.address.city}</li>
        <li>компания: {user.company.name}</li>
      </ul>
      <Link to={user.username}>Подробнее</Link>
    </section>
  );
};

export default memo(UserPreview);
