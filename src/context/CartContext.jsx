import { createContext, useContext, useEffect, useState } from 'react';
import { LS_KEYS, LS_Service } from 'services/localStorage';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    LS_Service.get(LS_KEYS.CART) || []
  );
  const { online } = useAuth();
  const onlineName = online.length > 0 ? online[0].name : '';

  const addToCart = book => {
    if (onlineName !== '') {
      const findUserCart = cartItems.filter(
        item => item.name === onlineName
      ).length;

      findUserCart > 0
        ? setCartItems(prev =>
            prev.map(item => {
              if (item.name === onlineName) {
                return { ...item, items: [...item.items, book] };
              }
              return item;
            })
          )
        : setCartItems(prev => [...prev, { name: onlineName, items: [book] }]);
    }
  };

  const removeItem = id => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.name === onlineName) {
          return {
            ...item,
            items: [...item.items.filter(item => item.id !== id)],
          };
        }
        return item;
      })
    );
  };

  const removeAll = () => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.name === onlineName) {
          return {
            ...item,
            items: [],
          };
        }
        return item;
      })
    );
  };

  const value = {
    cartItems,
    onlineName,
    addToCart,
    removeItem,
    removeAll,
  };

  useEffect(() => LS_Service.set(LS_KEYS.CART, cartItems), [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
