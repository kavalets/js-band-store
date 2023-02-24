import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from 'context/BooksContext';
import { Route404 } from 'routes';
import { BookOrder } from './BookOrder';
import { BookFoto } from './BookFoto';

export function Book() {
  const { id } = useParams();
  const { books } = useBooks();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    book.length > 0 && (document.title = book[0].title);
  }, [book]);

  useEffect(() => {
    if (books.standard.length > 0) {
      const timer = setTimeout(() => {
        setBook(books.standard.filter(item => +item.id === +id));
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [books.standard, id]);

  if (loading) {
    return <div className="loader loader--book is-active"></div>;
  } else if (book.length > 0) {
    return book.map(item => (
      <div className="book flex top" id={item.id} key={item.id}>
        <BookFoto image={item.image} title={item.title} />
        <div className="book__info">
          <div className="box book__text">
            <h1 className="book__title title">{item.title}</h1>
            <p className="book__author">by {item.author}</p>
            <p className="book__description">{item.description}</p>
          </div>
          <BookOrder id={item.id} price={item.price} title={item.title} />
        </div>
      </div>
    ));
  } else return <Route404 />;
}
