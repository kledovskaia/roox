import { useContext } from 'react';
import { UsersContext } from '../../context/Users';
import { SortBy } from '../../hooks/useUsersSort';
import Button from '../Button/Button';

const options: { type: SortBy; label: string }[] = [
  {
    type: 'name',
    label: 'по имени',
  },
  {
    type: 'city',
    label: 'по городу',
  },
];

export const Sidebar = () => {
  const { setSortType } = useContext(UsersContext);

  return (
    <>
      {options.map((option) => (
        <Button action={() => setSortType(option.type)}>{option.label}</Button>
      ))}
    </>
  );
};
