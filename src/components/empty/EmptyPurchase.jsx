import thanksImg from 'images/thanks.svg';

export function EmptyPurchase() {
  return (
    <div className="empty">
      <p>Thank you for your order!</p>
      <img className="empty__img" src={thanksImg} alt="thanks" />
    </div>
  );
}
