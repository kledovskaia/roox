import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

type UseFetchUsersResult = SuccessResult | LoadingResult | ErrorResult;
type SuccessResult = {
  data: User[];
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
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<FetchError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    async function fetchUsers() {
      try {
        const response = await fetch(url);
        const json: User[] = await response.json();
        setUsers(json);
      } catch (error) {
        setError(error as FetchError);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { data: users, loading: isLoading, error } as UseFetchUsersResult;
};
