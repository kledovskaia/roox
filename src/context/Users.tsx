import { createContext, FC, ReactNode } from 'react';
import { useUsersFetch } from '../hooks/useUsersFetch';
import { SortBy, useUsersSort } from '../hooks/useUsersSort';

const initialState = {
  users: null as User[] | null,
  loading: false,
  error: null as FetchError | null,
  setSortType: (type: SortBy) => {},
};

export const UsersContext = createContext(initialState);

type Props = {
  children: ReactNode;
};

export const UsersContextProvider: FC<Props> = ({ children }) => {
  const { data, loading, error } = useUsersFetch();
  const { users, setSortType } = useUsersSort(data);

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        setSortType,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
