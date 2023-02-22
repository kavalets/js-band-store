import { Link } from 'react-router-dom';
import { BooksFoto } from './BooksFoto';

export function BooksItem({ data }) {
  return (
    <div className="box books__item flex-column" id={data.id}>
      <BooksFoto id={data.id} image={data.image} title={data.title} />
      <h2 className="books__item-name">{data.title}</h2>
      <p className="books__item-author">by {data.author}</p>
      <p className="books__item-excerpt">{data.shortDescription}</p>
      <div className="books__item-bottom flex middle">
        <span className="books__item-price">${data.price}</span>
        <Link className="books__item-btn btn" to={`/books/${data.id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
