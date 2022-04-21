import { useContext } from 'react';
import { UsersContext } from '../../context/Users';
import Header from '../Header/Header';
import UserPreview from '../UserPreview/UserPreview';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <section>
      <Header>
        <h2>Список пользователей</h2>
      </Header>
      <ul>
        {users?.map((user) => (
          <UserPreview user={user} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
