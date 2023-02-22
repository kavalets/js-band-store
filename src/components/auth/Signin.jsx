import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import userImg from 'images/user.svg';

export function Signin() {
  const [tempUser, setTempUser] = useState('');
  const { authError, signIn } = useAuth();

  return (
    <div className="box form">
      <h1 className="title">Sign in</h1>
      <img className="form__icon" src={userImg} alt="user" />
      <div className="form__input input">
        <label className="input__label" htmlFor="userName">
          User name
        </label>
        <input
          className="input__model"
          type="text"
          value={tempUser}
          placeholder="Type user name"
          onKeyDown={({ key }) => key === 'Enter' && signIn(tempUser)}
          onChange={event => setTempUser(event.currentTarget.value)}
          id="userName"
        />
        {authError.signIn !== '' && (
          <span className="input__message">{authError.signIn}</span>
        )}
      </div>
      <button
        className="form__btn btn"
        type="button"
        onClick={() => signIn(tempUser)}
      >
        Sign in
      </button>
      <p className="form__link">
        No account? <Link to="/sign-up">Create one!</Link>
      </p>
    </div>
  );
}
