import { useEffect, useState } from 'react';
import { useCart } from 'context/CartContext';
import { EmptyCart } from 'components/empty/EmptyCart';
import { EmptyPurchase } from 'components/empty/EmptyPurchase';
import { CartItems } from './CartItems';

export function Cart() {
  const { cartItems, onlineName, removeAll } = useCart();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [purchase, setPurchase] = useState(false);
  const findUser = cartItems.filter(user => user.name === onlineName);
  const findUserBooks =
    findUser.length > 0 && findUser.map(book => book.items)[0];

  const handlerPurchase = () => {
    removeAll();
    setPurchase(true);
  };

  useEffect(() => {
    if (findUserBooks.length > 0) {
      const totalPrice = findUserBooks.reduce(
        (total, item) => (total = total + item.bookTotalPrice),
        0
      );

      setCartTotalPrice(+totalPrice.toFixed(2));
    }
  }, [findUserBooks]);

  useEffect(() => {
    document.title = 'My cart';
  }, []);

  return findUserBooks.length > 0 ? (
    <>
      <h1 className="title">My cart</h1>
      <div className="cart flex">
        {findUserBooks.map(item => {
          const { id, title, price, bookCount, bookTotalPrice } = item;
          const data = { id, title, price, bookCount, bookTotalPrice };
          return <CartItems data={data} key={data.id} />;
        })}
        <div className="cart__bottom flex middle end">
          <p>
            Total price &#8211;{' '}
            <span className="cart__total">${cartTotalPrice}</span>
          </p>
          <button
            className="cart__purchase btn"
            type="button"
            onClick={handlerPurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  ) : purchase ? (
    <EmptyPurchase />
  ) : (
    <EmptyCart />
  );
}
