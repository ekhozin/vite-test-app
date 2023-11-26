import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// import federation from '@originjs/vite-plugin-federation';

/**
 * Plugins
 */
const reactPlugin = react();

const svgrPlugin = svgr({
  svgrOptions: {
    icon: true,
    svgoConfig: {
      plugins: [
        {
          name: 'convertColors',
          params: {
            currentColor: true
          },
        },
      ],
    },
  },
});

// const federationPlugin = federation({
//   name: 'ui-kit',
//   filename: 'remoteEntry.js',
//   // modules to expose
//   exposes: {
//     './Button': './src/ui/Button'
//   },
//   shared: ['react', 'react-dom'],
// });

const plugins = [reactPlugin, svgrPlugin];

/**
 * Define config
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
});
