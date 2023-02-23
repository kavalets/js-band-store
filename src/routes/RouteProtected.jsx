import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { APP_URL } from 'constants';

export function RoutePublic({ children }) {
  const { online } = useAuth();
  const location = useLocation();

  return online.length > 0 ? (
    <Navigate to={`${APP_URL}books`} state={{ from: location }} replace />
  ) : (
    children
  );
}

export function RoutePrivate({ children }) {
  const { online } = useAuth();
  const location = useLocation();

  return online.length > 0 ? (
    children
  ) : (
    <Navigate to={APP_URL} state={{ from: location }} replace />
  );
}
