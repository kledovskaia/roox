import { createContext, ReactNode, useCallback, useState } from 'react';

export const SelectedUserContext = createContext<{
  selectedUser: User | null;
  select: (user: User) => void;
  cancel: () => void;
}>(null!);

type Props = {
  children: ReactNode;
};

export default function SelectedUserProvider({ children }: Props) {
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
}
