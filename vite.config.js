import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = process.env.BASE_PATH || '';
// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [react({babel:{plugins:["module:@preact/signals-react-transform"]}})],
})
