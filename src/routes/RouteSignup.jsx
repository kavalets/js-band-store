import { Signup } from 'components';
import { RoutePublic } from './RouteProtected';

export function RouteSignup() {
  return (
    <RoutePublic>
      <Signup />
    </RoutePublic>
  );
}
