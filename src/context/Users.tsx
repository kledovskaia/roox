import { createContext, FC, ReactNode } from 'react';
import { useUsersFetch } from '../hooks/useUsersFetch';
import { SortBy, useUsersSort } from '../hooks/useUsersSort';

const initialState = {
  users: null as FetchedUser[] | null,
  loading: false,
  error: null as FetchError | null,
  setSortType: (type: SortBy) => {},
  updateUser: (updatedUser: FetchedUser) => {},
};

export const UsersContext = createContext(initialState);

type Props = {
  children: ReactNode;
};

export const UsersContextProvider: FC<Props> = ({ children }) => {
  const { data, loading, error } = useUsersFetch();
  const { users, setSortType, updateUser } = useUsersSort(data);

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        setSortType,
        updateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
