import { Route, Routes } from 'react-router-dom';
import { APP_URL } from 'constants';
import { AuthProvider } from 'context/AuthContext';
import { BooksProvider } from 'context/BooksContext';
import { CartProvider } from 'context/CartContext';
import {
  Route404,
  RouteBook,
  RouteBooks,
  RouteCart,
  RouteLayout,
  RouteSignin,
  RouteSignup,
} from 'routes';

export default function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <CartProvider>
          <Routes>
            <Route path={APP_URL} element={<RouteLayout />}>
              <Route index element={<RouteSignin />} />
              <Route path={`${APP_URL}sign-up`} element={<RouteSignup />} />
              <Route path={`${APP_URL}books`} element={<RouteBooks />} />
              <Route path={`${APP_URL}books/:id`} element={<RouteBook />} />
              <Route path={`${APP_URL}cart`} element={<RouteCart />} />
              <Route path={`${APP_URL}*`} element={<Route404 />} />
            </Route>
          </Routes>
        </CartProvider>
      </BooksProvider>
    </AuthProvider>
  );
}
