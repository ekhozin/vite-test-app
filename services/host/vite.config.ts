import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

/**
 * Plugins
 */
const reactPlugin = react();

const federationPlugin = federation({
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    remote_app: 'http://localhost:5001/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
});

const plugins = [
  federationPlugin,
  reactPlugin,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
});
