import { createContext, FC, ReactNode } from 'react';
import { useUsersFetch } from '../hooks/useUsersFetch';
import { SortBy, useUsersSort } from '../hooks/useUsersSort';

export const UsersContext = createContext<{
  users: User[] | null;
  loading: boolean;
  error: FetchError | null;
  setSortType: (type: SortBy) => void;
}>(null!);

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
