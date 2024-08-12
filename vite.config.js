import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview })=>({
  base:command === 'serve'? "":"/playground/",
  plugins: [react({babel:{plugins:["module:@preact/signals-react-transform"]}})],
}))
