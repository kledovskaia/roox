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
    const aValue = a[sortBy as keyof typeof a];
    const bValue = b[sortBy as keyof typeof b];
    return sortOrder[orderBy](aValue, bValue);
  });
  return sortedItems;
};

export const selectUserData = (user: FetchedUser): User => ({
  email: user.email,
  id: user.id,
  name: user.name,
  phone: user.phone,
  username: user.username,
  website: user.website,
  street: user.address.street,
  city: user.address.city,
  zipcode: user.address.zipcode,
  company: user.company.name,
});
