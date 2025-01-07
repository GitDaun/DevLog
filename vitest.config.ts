// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr()],
  test: {
    
    globals: true, // setupTst.ts 설정 읽을 수 있게
    environment: 'jsdom', // JSDOM 환경 설정
    outputFile: './coverage', // 커버리지 리포트 저장경로
    setupFiles: ['./src/setupTests.ts'], // setup 파일 경로 설정
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
      provider: 'istanbul', // istanbul provider 사용
      reporter: ['text', 'json', 'html'],
      // istanbul 특정 옵션들
      all: true, // 테스트되지 않은 파일도 포함
      include: [
        'src/**/*.{js,ts}'
      ],
      exclude: [
        'node_modules/**',
        '**/*.d.ts',
        '**/*.test.{js,ts}',
        '**/types/**'
      ],
      // istanbul 임계값 설정
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
})