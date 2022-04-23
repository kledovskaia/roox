import { OrderBy, SortBy } from '../hooks/useUsersSort';

type Sort = <T>(config: {
  items: T[];
  sortBy: SortBy;
  orderBy: OrderBy;
}) => T[];

const sortOrder = {
  asc: <T>(a: T, b: T) => (a > b ? 1 : a === b ? 0 : -1),
  desc: <T>(a: T, b: T) => (b > a ? 1 : b === a ? 0 : -1),
};

export const sort: Sort = ({ items, sortBy, orderBy }) => {
  const sortedItems = [...items].sort((a, b) => {
    const aValue = deepPick(a, sortBy);
    const bValue = deepPick(b, sortBy);
    return sortOrder[orderBy](aValue, bValue);
  });
  return sortedItems;
};

const deepPick = (
  obj: {
    [key in string]: any;
  },
  path: string
) => {
  let levels = path.split('.').reverse();
  if (levels.length === 1) return obj[levels[0]];
  let result = obj;
  while (levels.length) {
    result = result[levels.pop() as keyof typeof result];
  }
  return result;
};

export const selectUserData = (user: FetchedUser): User => ({
  id: user.id,
  email: user.email,
  name: user.name,
  phone: user.phone,
  username: user.username,
  website: user.website,
  street: user.address.street,
  city: user.address.city,
  zipcode: user.address.zipcode,
  company: user.company.name,
});

export const updateUserData = (
  old: FetchedUser,
  newFormatted: User
): FetchedUser => ({
  ...old,
  address: {
    ...old.address,
    street: newFormatted.street,
    city: newFormatted.city,
    zipcode: newFormatted.zipcode,
  },
  company: {
    ...old.company,
    name: newFormatted.company,
  },
  email: newFormatted.email,
  name: newFormatted.name,
  phone: newFormatted.phone,
  username: newFormatted.username,
  website: newFormatted.website,
  comment: newFormatted.comment,
});
