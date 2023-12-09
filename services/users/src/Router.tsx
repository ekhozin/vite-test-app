import { createBrowserRouter } from 'react-router-dom';

export const routes = [
  {
    path: '/users',
    // element: <App />,
    lazy: async () => {
      const { Layout } = await import('./Layout');

      return {
        Component: Layout,
      };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import('./pages/HomePage');

          return {
            Component: HomePage,
          };
        },
      },
      {
        path: '/users/users-one',
        lazy: async () => {
          const { OnePage } = await import('./pages/OnePage');

          return {
            Component: OnePage,
          };
        },
      },
      {
        path: '/users/users-two',
        lazy: async () => {
          const { TwoPage } = await import('./pages/TwoPage');

          return {
            Component: TwoPage,
          };
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
