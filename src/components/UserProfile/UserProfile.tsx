import { useCallback, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import Button from '../Button/Button';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';

const UserProfile = () => {
  const { user } = useUser();
  const [isOnEdit, setIsOnEdit] = useState(false);

  const toggleIsOnEdit = useCallback(() => {
    setIsOnEdit((state) => !state);
  }, []);

  return (
    <>
      <Header>
        <h2>Профиль пользователя</h2>
        <Button action={toggleIsOnEdit}>Редактировать</Button>
      </Header>
      <UserForm initialState={user} />
    </>
  );
};

export default UserProfile;
