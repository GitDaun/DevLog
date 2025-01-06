import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Vitest의 expect에 jest-dom matchers 추가
expect.extend(matchers);