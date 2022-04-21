import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { SelectedUserProvider } from './context/SelectedUser';
import { UsersContextProvider } from './context/Users';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <UsersContextProvider>
      <SelectedUserProvider>
        <App />
      </SelectedUserProvider>
    </UsersContextProvider>
  </StrictMode>
);
