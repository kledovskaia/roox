import { useContext } from 'react';
import { SelectedUserContext } from './context/SelectedUserProvider';
import { useUsersFetch } from './hooks/useUsersFetch';
import { useUsersSort } from './hooks/useUsersSort';

export default function App() {
  const { data, loading, error } = useUsersFetch();
  const { users, handleSortTypeChange } = useUsersSort(data);
  const { selectedUser } = useContext(SelectedUserContext);
  // const [selectedUser, setSelectedUser] = useState(null); // CONTEXT!

  return (
    <Layout>
      <Sidebar handleSortTypeChange={handleSortTypeChange} />
      <Main>
        {users && (
          <>
            {!selectedUser && users.map((user) => <UserProfile {...user} />)}
            {selectedUser && <UserList users={users} />}
          </>
        )}
      </Main>
    </Layout>
  );
}
