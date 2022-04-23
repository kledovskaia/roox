import { useCallback, useEffect, useState } from 'react';
import * as helpers from '../helpers';

export type OrderBy = 'asc' | 'desc';
export type SortBy = 'name' | 'address.city';

export const useUsersSort = (users: FetchedUser[] | null) => {
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [orderBy, setOrderBy] = useState<OrderBy>('asc');
  const [sortedUsers, setSortedUsers] = useState<FetchedUser[] | null>(users);

  useEffect(() => {
    setSortedUsers(helpers.sort({ items: users || [], sortBy, orderBy }));
  }, [users, orderBy, sortBy]);

  const handleSortTypeChange = useCallback(
    (type: SortBy) => {
      if (type === sortBy)
        setOrderBy((order) => (order === 'asc' ? 'desc' : 'asc'));
      else setSortBy(type);
    },
    [sortBy]
  );

  return { users: sortedUsers, setSortType: handleSortTypeChange } as const;
};
