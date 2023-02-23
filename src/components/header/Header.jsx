import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import { HeaderUser } from './HeaderUser';
import { APP_URL } from 'constants';
import useTheme from 'hooks/useTheme';
import logoImg from 'images/logo.svg';

export function Header() {
  const { online } = useAuth();
  const [theme, setTheme] = useTheme();

  const handlerTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <header className="header">
      <div className="wrapper flex middle">
        <Link className="header__logo flex middle" to={APP_URL}>
          <img className="header__logo-icon" src={logoImg} alt="logo" />
          <span>Js Band Store</span>
        </Link>
        {online.length > 0 && <HeaderUser />}
        <button
          className="header__theme"
          type="button"
          aria-label={theme}
          onClick={handlerTheme}
        ></button>
      </div>
    </header>
  );
}
