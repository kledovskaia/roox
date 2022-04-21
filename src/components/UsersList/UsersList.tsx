import { FC, memo, useContext } from 'react';
import { SelectedUserContext } from '../../context/SelectedUser';
import Header from '../Header/Header';
import UserPreview from '../UserPreview/UserPreview';

type Props = {
  users: User[];
};

const UsersList: FC<Props> = ({ users }) => {
  const { select } = useContext(SelectedUserContext);

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

export default memo(UsersList);
