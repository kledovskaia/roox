import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

type UseFetchUsersResult = SuccessResult | LoadingResult | ErrorResult;
type SuccessResult = {
  data: FetchedUser[];
  loading: false;
  error: null;
};
type LoadingResult = {
  data: null;
  loading: true;
  error: null;
};
type ErrorResult = {
  data: null;
  loading: false;
  error: FetchError;
};

export const useUsersFetch = () => {
  const [users, setUsers] = useState<FetchedUser[] | null>(null);
  const [error, setError] = useState<FetchError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (users) return;
    setError(null);
    setIsLoading(true);

    async function fetchUsers() {
      try {
        const response = await fetch(url);
        const json: FetchedUser[] = await response.json();
        setUsers(json);
      } catch (error) {
        setError(error as FetchError);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, [users]);

  return { data: users, loading: isLoading, error } as UseFetchUsersResult;
};
