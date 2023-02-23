import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { useCart } from 'context/CartContext';
import { APP_URL } from 'constants';
import cartImg from 'images/cart.svg';
import userImg from 'images/user.svg';
import dotsImg from 'images/dots.svg';

export function HeaderUser() {
  const { cartItems } = useCart();
  const { online, signOut } = useAuth();
  const [visible, setVisible] = useState(false);
  const refUser = useRef(null);
  const findUser = cartItems.filter(user => user.name === online[0].name);
  const findUserBooks =
    findUser.length > 0 && findUser.map(book => book.items)[0].length;

  const handlerOpen = event => {
    event.stopPropagation();
    setVisible(prev => !prev);
  };

  useEffect(() => {
    const docClick = event =>
      !refUser.current.contains(event.target) && setVisible(false);
    const winResize = () => window.innerWidth > 799 && setVisible(false);

    document.addEventListener('click', docClick);
    window.addEventListener('resize', winResize);

    return () => {
      document.removeEventListener('click', docClick);
      window.removeEventListener('resize', winResize);
    };
  }, [setVisible]);

  return (
    <>
      <Link className="header__cart" to={`${APP_URL}cart`}>
        {findUserBooks > 0 && (
          <span className="header__cart-count">{findUserBooks}</span>
        )}
        <img src={cartImg} alt="cart" />
      </Link>
      <div
        className={`header__user flex middle${visible ? ' is-visible' : ''}`}
        ref={refUser}
      >
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
      <button className="header__dots btn" type="button" onClick={handlerOpen}>
        <img src={dotsImg} alt="dots" />
      </button>
    </>
  );
}
