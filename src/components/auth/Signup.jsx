import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { APP_URL } from 'constants';
import { useAuth } from 'context/AuthContext';

export function Signup() {
  const [tempUser, setTempUser] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { authError, signUp } = useAuth();

  const handlerInputUser = event => {
    const inputValue = event.currentTarget.value;

    setTempUser(inputValue);
    inputValue.length > 3 && inputValue.length < 17
      ? setDisabled(false)
      : setDisabled(true);
  };

  const handlerSignUp = () => {
    const newUser = {
      id: uuid(),
      name: tempUser,
    };

    signUp(newUser);
  };

  return (
    <div className="box form">
      <h1 className="title">Sign up</h1>
      <div className="form__input input">
        <input
          className="input__model"
          type="text"
          value={tempUser}
          placeholder="Type user name"
          onKeyDown={({ key }) => key === 'Enter' && handlerSignUp()}
          onChange={handlerInputUser}
        />
        {authError.signUp !== '' && (
          <span className="input__message">{authError.signUp}</span>
        )}
      </div>
      <button
        className="form__btn btn"
        type="button"
        onClick={handlerSignUp}
        disabled={disabled}
      >
        Sign up
      </button>
      <p className="form__link">
        Already have an account? <Link to={APP_URL}>Sign in</Link>
      </p>
    </div>
  );
}
