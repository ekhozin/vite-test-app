import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

/**
 * Plugins
 */
const reactPlugin = react();

const federationPlugin = federation({
  name: 'users',
  filename: 'remoteEntry.js',
  // modules to expose
  exposes: {
    './Button': './src/ui/Button'
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
});

const plugins = [
  federationPlugin,
  reactPlugin,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
})
