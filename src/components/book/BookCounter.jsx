import { useEffect, useState } from 'react';

export function BookCounter({ getCount }) {
  const [count, setCount] = useState('1');

  const handlerInput = event => {
    const value = event.currentTarget.value;
    setCount(
      value === '0' ? '1' : +value > 42 ? '42' : value.replace(/[^0-9]/g, '')
    );
  };

  const handlerPlus = () => {
    +count < 42 && setCount(prev => String(+prev + 1));
  };

  const handlerMinus = () => {
    +count > 1 && setCount(prev => String(+prev - 1));
  };

  useEffect(() => getCount(count), [count, getCount]);

  return (
    <div className="counter flex middle">
      <button className="counter__btn btn" type="button" onClick={handlerMinus}>
        &#8722;
      </button>
      <input
        className="counter__model"
        type="text"
        value={count}
        onInput={handlerInput}
        onBlur={() => count === '' && setCount('1')}
      />
      <button className="counter__btn btn" type="button" onClick={handlerPlus}>
        &#43;
      </button>
    </div>
  );
}
