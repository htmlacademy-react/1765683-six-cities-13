import { beforeAll, beforeEach, describe, expect } from 'vitest';
import { createMemoryHistory, MemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { withHistory } from '../../store/mock/mock-components.tsx';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ProtectedRoute from './private-route.tsx';

describe('Component: Private Fav Route', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <ProtectedRoute redirectTo={AppRoute.Favorites} authorizationStatus={AuthorizationStatus.Auth}>
              <span>{expectedText}</span>
            </ProtectedRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <ProtectedRoute redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.NoAuth}>
              <span>{notExpectedText}</span>
            </ProtectedRoute>
          }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
