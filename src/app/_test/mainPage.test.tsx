import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import MainPage from '../page'; // MainPage 컴포넌트 경로에 맞게 수정

test("renders the main page", () => {
  render(<MainPage />);
  expect(screen.getByRole("heading", { name: "Devlog of Daun" })).toBeInTheDocument();
});