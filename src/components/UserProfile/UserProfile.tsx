import { FC, memo, useContext } from 'react';
import { useCallback, useState } from 'react';
import { SelectedUserContext } from '../../context/SelectedUser';
import Button from '../Button/Button';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';

type Props = {
  user: User;
};

const UserProfile: FC<Props> = ({ user }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);
  const { cancel } = useContext(SelectedUserContext);

  const toggleIsOnEdit = useCallback(() => {
    setIsOnEdit((state) => !state);
  }, []);

  return (
    <>
      <Header>
        <h2>Профиль пользователя</h2>
        <Button action={toggleIsOnEdit}>Редактировать</Button>
      </Header>
      <UserForm initialState={user} cancel={cancel} />
    </>
  );
};

export default memo(UserProfile);
