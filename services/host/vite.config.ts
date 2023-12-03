import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// TODO: how to get it from env vars? How to set dynamically?
const USERS_REMOTE_URL = 'http://localhost:3001';

/**
 * Plugins
 */
const reactPlugin = react();

const federationPlugin = federation({
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    users: `${USERS_REMOTE_URL}/users/assets/remoteEntry.js`,
  },
  shared: [
    'react', 
    'react-dom',
    'react-router-dom',
  ],
});

const plugins = [
  federationPlugin,
  reactPlugin,
];

/**
 * Server
 */
const server = {
  port: 3000,
  strictPort: true,
};

/**
 * Build
 */
const build = {
  modulePreload: false,
  minify: false,
  cssCodeSplit: false,
  target: 'esnext',
};

/**
 * Preview
 */
const preview = {
  port: 3000,
  strictPort: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  server,
  build,
  preview,
});
