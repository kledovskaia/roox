import { useContext } from 'react';
import { UsersContext } from '../../context/Users';
import Header from '../Header/Header';
import UserPreview from '../UserPreview/UserPreview';
import s from './UsersList.module.scss';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <section className={s.usersList}>
      <Header>
        <h2>Список пользователей</h2>
      </Header>
      <ul className={s.usersList__list}>
        {users?.map((user) => (
          <UserPreview key={user.id} user={user} />
        ))}
      </ul>
      {!!users?.length && (
        <p className={s.usersList__total}>
          Найдено {users.length} пользователей
        </p>
      )}
    </section>
  );
};

export default UsersList;
