import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Set default env variables if not defined
if (!process.env.VITE_BASE44_APP_BASE_URL) {
  process.env.VITE_BASE44_APP_BASE_URL = 'http://localhost:3000'
}

export default defineConfig({
  base: '/landing_page_entreprenariat/',

  logLevel: 'error',

  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
})