import { Cart } from 'components';
import { RoutePrivate } from './RouteProtected';

export function RouteCart() {
  return (
    <RoutePrivate>
      <Cart />
    </RoutePrivate>
  );
}
