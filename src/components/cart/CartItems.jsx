import { useCart } from 'context/CartContext';
import removeImg from 'images/remove.svg';

export function CartItems({ data }) {
  const { removeItem } = useCart();

  return (
    <>
      <div className="box cart__item flex-column" id={data.id}>
        <h2 className="cart__item-name">{data.title}</h2>
        <div className="cart__item-row flex middle between">
          <span>Price:</span>
          <span className="cart__item-price">${data.price}</span>
        </div>
        <div className="cart__item-row flex middle between">
          <span>Count:</span>
          <span className="cart__item-count">{data.bookCount}</span>
        </div>
        <div className="cart__item-row flex middle between">
          <span>Total:</span>
          <span className="cart__item-total">${data.bookTotalPrice}</span>
        </div>
        <button
          className="cart__item-remove btn"
          type="button"
          onClick={() => removeItem(data.id)}
        >
          <img src={removeImg} alt="remove" />
        </button>
      </div>
    </>
  );
}
