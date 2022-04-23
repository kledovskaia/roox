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

  const handleSubmit = useCallback((values: Fields) => {
    console.log(values);
  }, []);

  return (
    <>
      <Header>
        <h2>Профиль пользователя</h2>
        <Button action={toggleIsOnEdit}>Редактировать</Button>
      </Header>
      <UserForm user={user} disabled={!isOnEdit} onSubmit={handleSubmit} />
    </>
  );
};

export default UserProfile;
