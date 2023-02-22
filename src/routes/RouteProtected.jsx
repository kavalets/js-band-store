import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

export function RoutePublic({ children }) {
  const { online } = useAuth();
  const location = useLocation();

  return online.length > 0 ? (
    <Navigate to="/books" state={{ from: location }} replace />
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
    <Navigate to="/" state={{ from: location }} replace />
  );
}
