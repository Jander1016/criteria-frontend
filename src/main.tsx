import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { RouterProvider } from'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider.tsx';
import router from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router }/>
    </AuthProvider>
  </React.StrictMode>,
);