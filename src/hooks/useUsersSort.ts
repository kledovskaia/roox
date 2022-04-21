import { useCallback, useEffect, useState } from 'react';
import * as helpers from '../helpers';

export type OrderBy = 'asc' | 'desc';
export type SortBy = 'name' | 'city';

export const useUsersSort = (data: User[] | null) => {
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [orderBy, setOrderBy] = useState<OrderBy>('asc');
  const [sortedUsers, setSortedUsers] = useState<User[] | null>(data);

  useEffect(() => {
    if (!data) return;
    else
      setSortedUsers((users) =>
        helpers.sort({ items: users || data, sortBy, orderBy })
      );
  }, [data, orderBy, sortBy]);

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
