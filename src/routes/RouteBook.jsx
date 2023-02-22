import { Book } from 'components';
import { RoutePrivate } from './RouteProtected';

export function RouteBook() {
  return (
    <RoutePrivate>
      <Book />
    </RoutePrivate>
  );
}
