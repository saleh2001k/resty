import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import Header from './index'; 
import '@testing-library/jest-dom';

describe('Header component', () => {
  test('renders header with title', () => {
    const wrapper = render(<Header />);
    const h1Element = wrapper.getByText('RESTy'); 
    expect(h1Element).toBeTruthy();
  });
});