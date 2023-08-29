import { describe, expect } from 'vitest';
import LoadingSpinner from './loading-spinner';
import { render, screen } from '@testing-library/react';

describe('Component: Loading screen', () => {
  it('should render correct', () => {
    render(<LoadingSpinner />);
    const loadingScreen = screen.getByTestId('loading-screen');

    expect(loadingScreen).toBeInTheDocument();
  });
});
