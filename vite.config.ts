import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/panto-plot",
  // MUI and Emotion must resolve to a single copy across the tree.
  resolve: {
    dedupe: ['@emotion/react', '@emotion/styled', '@mui/material'],
  },
});