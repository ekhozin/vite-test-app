import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json';

/**
 * Plugins
 */
const reactPlugin = react();

const federationPlugin = federation({
  name: 'users',
  filename: 'remoteEntry.js',
  // modules to expose
  exposes: {
    './App': './src/App.tsx'
  },
  shared: {
    react: {
      requiredVersion: packageJson.dependencies['react'],
    }, 
    'react-dom': {
      requiredVersion: packageJson.dependencies['react-dom'],
    },
    'react-router-dom': {
      requiredVersion: packageJson.dependencies['react-router-dom'],
    },
  },
});

const plugins = [
  federationPlugin,
  reactPlugin,
];

/**
 * Server
 */
const server = {
  port: 3001,
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
  port: 3001,
  strictPort: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  server,
  build,
  preview,
});
