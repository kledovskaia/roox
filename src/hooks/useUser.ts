import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../context/Users';

export const useUser = () => {
  const [loading, setLoading] = useState(true);
  const { users } = useContext(UsersContext);
  const { username } = useParams();
  const [user, setUser] = useState<FetchedUser>();

  useEffect(() => {
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (!users || !username) return;
    setUser(users.find((user) => user.username === username));
  }, [username, users]);

  return { user, loading } as const;
};
