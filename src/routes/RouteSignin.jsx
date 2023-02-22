import { Signin } from 'components';
import { RoutePublic } from './RouteProtected';

export function RouteSignin() {
  return (
    <RoutePublic>
      <Signin />
    </RoutePublic>
  );
}
