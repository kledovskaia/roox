import { useContext } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import UserPreview from './components/UserPreview/UserPreview';
import UserProfile from './components/UserProfile/UserProfile';
import UsersList from './components/UsersList/UsersList';
import { SelectedUserContext } from './context/SelectedUser';
import { UsersContext } from './context/Users';

export const App = () => {
  const { users } = useContext(UsersContext);
  const { selectedUser } = useContext(SelectedUserContext);

  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <main>
        {users && (
          <>
            {!selectedUser && <UsersList users={users} />}
            {selectedUser && <UserProfile user={selectedUser} />}
          </>
        )}
      </main>
    </div>
  );
};
