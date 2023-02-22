import { createContext, useContext, useEffect, useState } from 'react';
import { LS_KEYS, LS_Service } from 'services/localStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(LS_Service.get(LS_KEYS.USERS) || []);
  const [online, setOnline] = useState(LS_Service.get(LS_KEYS.ONLINE) || []);
  const [authError, setAuthError] = useState({
    signIn: '',
    signUp: '',
  });

  const signIn = userName => {
    const findUser = users.filter(user => user.name === userName);

    if (findUser.length) setOnline(findUser);
    else setAuthError({ signUp: '', signIn: 'Username not found' });
  };

  const signUp = newUser => {
    const findUser = users.filter(user => user.name === newUser.name);

    if (findUser.length)
      setAuthError({ signUp: 'Username already exists', signIn: '' });
    else {
      setUsers(prevUsers => [...prevUsers, newUser]);
      setOnline([newUser]);
    }
  };

  const signOut = () => setOnline([]);

  const value = {
    online,
    authError,
    signIn,
    signUp,
    signOut,
  };

  useEffect(() => LS_Service.set(LS_KEYS.USERS, users), [users]);
  useEffect(() => LS_Service.set(LS_KEYS.ONLINE, online), [online]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAuthError({ signIn: '', signUp: '' });
    }, 2000);

    return () => clearTimeout(timer);
  }, [authError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
