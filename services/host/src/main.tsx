import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// @ts-ignore
const UsersApp = lazy(() => import('users/App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <div>I am about page</div>,
      },
      {
        path: '/users',
        element: (
          <Suspense fallback='loading...'>
            <UsersApp />
          </Suspense>
        ),
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
