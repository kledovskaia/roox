import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfile';
import UsersList from './components/UsersList/UsersList';

export const App = () => {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:username" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
};
