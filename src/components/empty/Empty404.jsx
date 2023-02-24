import { useEffect } from 'react';
import img404 from 'images/404.svg';

export function Empty404() {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return (
    <div className="empty">
      <p>Oops...!!! Error 404 &ndash; page not found!</p>
      <img className="empty__img" src={img404} alt="404" />
    </div>
  );
}
