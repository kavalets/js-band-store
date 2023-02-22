import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { useCart } from 'context/CartContext';
import cartImg from 'images/cart.svg';
import userImg from 'images/user.svg';
import dotsImg from 'images/dots.svg';

export function HeaderUser() {
  const { online, signOut } = useAuth();
  const { cartItems } = useCart();
  const findUser = cartItems.filter(user => user.name === online[0].name);
  const findUserBooks =
    findUser.length > 0 && findUser.map(book => book.items)[0].length;

  return (
    <>
      <Link className="header__cart" to="/cart">
        {findUserBooks > 0 && (
          <span className="header__cart-count">{findUserBooks}</span>
        )}
        <img src={cartImg} alt="cart" />
      </Link>
      <div className="header__user flex middle">
        <button
          className="header__user-out btn"
          type="button"
          onClick={signOut}
        >
          Sign out
        </button>
        <div className="header__user-foto">
          <img src={userImg} alt="user" />
        </div>
        <span>{online[0].name}</span>
      </div>
      <button className="header__dots btn" type="button">
        <img src={dotsImg} alt="dots" />
      </button>
    </>
  );
}
