import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import noimageImg from 'images/no-image.svg';

export function BooksFoto({ id, image, title }) {
  const link = useRef();

  useEffect(() => {
    const img = new Image();
    const addImage = img => {
      link.current.innerHTML = '';
      link.current.appendChild(img);
    };

    img.src = image ? image : noimageImg;
    img.alt = title;
    img.addEventListener('load', () => addImage(img));

    return () => img.removeEventListener('load', () => addImage(img));
  }, [image, title]);

  return (
    <Link
      className="books__item-foto flex middle center"
      to={`/books/${id}`}
      ref={link}
    >
      <span className="loader is-active"></span>
    </Link>
  );
}
