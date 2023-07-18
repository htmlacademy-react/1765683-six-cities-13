import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type TProtectedRouteProps = {
  isAuth: boolean;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  isAuth,
  redirectTo,
  children,
}: TProtectedRouteProps) {

  return isAuth ? children : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
