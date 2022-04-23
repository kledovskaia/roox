import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import Spinner from './components/Spinner/Spinner';
import UserProfile from './components/UserProfile/UserProfile';
import UsersList from './components/UsersList/UsersList';
import { UsersContext } from './context/Users';
import s from './App.module.scss';

export const App = () => {
  const { loading } = useContext(UsersContext);

  return (
    <div className={s.app}>
      <Spinner loading={loading} />
      <aside className={s.app__sidebar}>
        <Sidebar />
      </aside>
      <main className={s.app__main}>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:username" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
};
