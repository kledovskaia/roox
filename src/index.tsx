import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { UsersContextProvider } from './context/Users';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </BrowserRouter>
  </StrictMode>
);
