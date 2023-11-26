import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

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

const plugins = [reactPlugin, svgrPlugin];

/**
 * Define config
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
});
