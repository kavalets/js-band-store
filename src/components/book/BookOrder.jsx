import { useEffect, useState } from 'react';
import { useCart } from 'context/CartContext';
import { BookCounter } from './BookCounter';

export function BookOrder({ id, price, title }) {
  const [bookCount, setBookCount] = useState(1);
  const [bookTotalPrice, setBookTotalPrice] = useState(+price);
  const [disabled, setDisabled] = useState(false);
  const { onlineName, cartItems, addToCart } = useCart();

  const handlerToCart = () =>
    addToCart({
      id,
      title,
      price,
      bookCount,
      bookTotalPrice,
    });

  const getCount = count => {
    const cleanCount = +count > 0 ? +count : 1;
    setBookTotalPrice(+(cleanCount * +price).toFixed(2));
    setBookCount(cleanCount);
  };

  useEffect(() => {
    const findUser = cartItems.filter(user => user.name === onlineName);
    const findUserBook =
      findUser.length > 0 &&
      findUser.map(book => book.items.filter(item => item.id === id))[0].length;

    findUserBook > 0 && setDisabled(true);
  }, [cartItems, id, onlineName]);

  return (
    <div className="box book__order">
      <div className="book__order-row flex middle between">
        <span>Price:</span>
        <span className="book__order-price">${price}</span>
      </div>
      <div className="book__order-row flex middle between">
        <span>Count:</span>
        <BookCounter getCount={getCount} />
      </div>
      <div className="book__order-row flex middle between">
        <span>Total:</span>
        <span className="book__order-price">${bookTotalPrice}</span>
      </div>
      <button
        className="book__order-btn btn"
        type="button"
        onClick={handlerToCart}
        disabled={disabled}
      >
        {disabled ? 'Added' : 'Add to cart'}
      </button>
    </div>
  );
}
