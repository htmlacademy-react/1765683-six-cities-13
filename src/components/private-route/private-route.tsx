import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  authorizationStatus,
  redirectTo,
  children,
}: TProtectedRouteProps) {

  return authorizationStatus === AuthorizationStatus.Auth ? children : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
