import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { store } from '../../store';
import { checkAuthAction } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

export type TProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  authorizationStatus,
  redirectTo,
  children,
}: TProtectedRouteProps) {
  useEffect(() => {
    store.dispatch(checkAuthAction());
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
