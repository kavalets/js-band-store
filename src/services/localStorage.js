const LS_KEYS = {
  THEME: 'theme',
  ONLINE: 'online',
  USERS: 'users',
  CART: 'cart',
};

class LS_Service {
  static get = key => {
    const value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  static set = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  static remove = key => {
    return window.localStorage.removeItem(key);
  };

  static clear = () => {
    return window.localStorage.clear();
  };
}

export { LS_KEYS, LS_Service };
