// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    outputFile: './coverage', // 커버리지 리포트 저장경로
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    deps: {
      optimizer: {
        web: {
          include: [
            '@testing-library/jest-dom', '@testing-library/react']
        }
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      all: true,
      include: [
        'src/**/*.{js,ts,jsx,tsx}'
      ],
      exclude: [
        'node_modules/**',
        '**/*.d.ts',
        '**/*.test.{js,ts}',
        '**/types/**'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
})