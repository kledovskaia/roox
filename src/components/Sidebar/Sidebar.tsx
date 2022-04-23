import { useContext } from 'react';
import { UsersContext } from '../../context/Users';
import { SortBy } from '../../hooks/useUsersSort';
import Button from '../Button/Button';
import s from './Sidebar.module.scss';

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
    <div className={s.sidebar}>
      <p className={s.sidebar__title}>Сортировка</p>
      <div className={s.sidebar__controls}>
        {options.map((option) => (
          <Button action={() => setSortType(option.type)}>
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
