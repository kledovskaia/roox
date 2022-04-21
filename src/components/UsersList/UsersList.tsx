import { useContext } from 'react';
import { UsersContext } from '../../context/Users';
import Header from '../Header/Header';
import UserPreview from '../UserPreview/UserPreview';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  console.log(users);

  return (
    <section>
      <Header>
        <h2>Список пользователей</h2>
      </Header>
      <ul>
        {users?.map((user) => (
          <UserPreview key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
