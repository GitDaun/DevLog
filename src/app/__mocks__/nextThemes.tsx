import { vi } from 'vitest';

export const mockSetTheme = vi.fn();

export const useTheme = () => ({
  theme: 'light',
  setTheme: mockSetTheme,
  resolvedTheme: 'light',
  themes: ['light', 'dark'],
  systemTheme: 'light'
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => children;

export default {
  useTheme,
  ThemeProvider
}; 