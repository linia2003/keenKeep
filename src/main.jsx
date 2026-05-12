import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FriendProvider } from './context/FriendContext'; 
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import FriendDetails from './pages/FriendDetails';
import NotFound from './pages/NotFound';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/friend/:id", element: <FriendDetails /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </React.StrictMode>
);