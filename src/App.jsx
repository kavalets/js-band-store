import { Route, Routes } from 'react-router-dom';
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
            <Route path="/" element={<RouteLayout />}>
              <Route index element={<RouteSignin />} />
              <Route path="/sign-up" element={<RouteSignup />} />
              <Route path="/books" element={<RouteBooks />} />
              <Route path="/books/:id" element={<RouteBook />} />
              <Route path="/cart" element={<RouteCart />} />
              <Route path="*" element={<Route404 />} />
            </Route>
          </Routes>
        </CartProvider>
      </BooksProvider>
    </AuthProvider>
  );
}
