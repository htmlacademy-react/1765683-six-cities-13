import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

type TProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: TProtectedRouteProps) {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default ProtectedRoute;
