import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// @ts-ignore
// const usersRoutes = lazy(() => import('users/App'));
import usersRoutes from 'users/Router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <div>I am about page</div>,
      },
      // {
      //   path: '/users',
      //   element: (
      //     <Suspense fallback='loading...'>
      //       <UsersApp />
      //     </Suspense>
      //   ),
      // },
      ...usersRoutes,
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
