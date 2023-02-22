import glassesImg from 'images/glasses.svg';

export function EmptyCart() {
  return (
    <div className="empty">
      <p>Oops...!!! Your Cart is Empty!</p>
      <img className="empty__img" src={glassesImg} alt="glasses" />
    </div>
  );
}
