import { useEffect, useRef } from 'react';
import noimageImg from 'images/no-image.svg';

export function BookFoto({ image, title }) {
  const foto = useRef();

  useEffect(() => {
    const img = new Image();
    const addImg = img => {
      foto.current.innerHTML = '';
      foto.current.appendChild(img);
    };

    img.src = image ? image : noimageImg;
    img.alt = title;
    img.addEventListener('load', () => addImg(img));

    return () => img.removeEventListener('load', () => addImg(img));
  }, [image, title]);

  return (
    <div className="box book__foto flex middle center" ref={foto}>
      <span className="loader is-active"></span>
    </div>
  );
}
