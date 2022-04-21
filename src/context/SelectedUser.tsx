import { createContext, FC, ReactNode, useCallback, useState } from 'react';

export const SelectedUserContext = createContext<{
  selectedUser: User | null;
  select: (user: User) => void;
  cancel: () => void;
}>(null!);

type Props = {
  children: ReactNode;
};

export const SelectedUserProvider: FC<Props> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = useCallback((user: User) => {
    setSelectedUser(user);
  }, []);

  const handleCancelSelectedUser = useCallback(() => {
    setSelectedUser(null);
  }, []);

  return (
    <SelectedUserContext.Provider
      value={{
        selectedUser,
        select: handleSelectUser,
        cancel: handleCancelSelectedUser,
      }}
    >
      {children}
    </SelectedUserContext.Provider>
  );
};
