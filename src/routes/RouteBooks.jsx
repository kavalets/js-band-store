import { Books } from 'components';
import { RoutePrivate } from './RouteProtected';

export function RouteBooks() {
  return (
    <RoutePrivate>
      <Books />
    </RoutePrivate>
  );
}
