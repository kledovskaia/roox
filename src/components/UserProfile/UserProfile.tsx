import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../../context/Users';
import { selectUserData, updateUserData } from '../../helpers';
import { useUser } from '../../hooks/useUser';
import Button from '../Button/Button';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';

const UserProfile = () => {
  const { user, loading: userLoading, updateUser } = useUser();
  const { loading: usersLoading } = useContext(UsersContext);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [formattedUser, setFormattedUser] = useState<User>();

  useEffect(() => {
    if (!user) return;
    setFormattedUser(selectUserData(user));
  }, [user]);

  const toggleIsOnEdit = useCallback(() => {
    setIsOnEdit((state) => !state);
  }, []);

  const handleSubmit = useCallback(
    (values: User) => {
      if (!user) return;
      const updatedUser = updateUserData(user, values);
      console.log(JSON.stringify(updatedUser));
      updateUser(updatedUser);
      alert('Updated!');
    },
    [user]
  );

  return (
    <>
      <Header>
        <h2>Профиль пользователя</h2>
        {user && <Button action={toggleIsOnEdit}>Редактировать</Button>}
      </Header>
      {!usersLoading && !userLoading && !user && (
        <>
          <h3>404 - Пользователь не найден</h3>
          <Link to="/">На Главную</Link>
        </>
      )}
      {user && (
        <UserForm
          user={formattedUser}
          disabled={!isOnEdit}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default UserProfile;
