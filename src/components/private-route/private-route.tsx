import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

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
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return;
  }
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
