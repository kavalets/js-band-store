import { useEffect } from 'react';
import { useBooks } from 'context/BooksContext';
import { BooksFilter } from './BooksFilter';
import { BooksItem } from './BooksItem';

export function Books() {
  const { books, booksCatch } = useBooks();

  useEffect(() => {
    document.title = 'List of books';
  }, []);

  return (
    <>
      <h1 className="title">List of books</h1>
      {!booksCatch.error && <BooksFilter />}
      <div className="books flex">
        {booksCatch.message !== '' && (
          <p className="books__message">{booksCatch.message}</p>
        )}
        {books.filtered.map(book => (
          <BooksItem data={book} key={book.id.toString()} />
        ))}
      </div>
      {!booksCatch.loaded && (
        <div className="loader loader--books is-active"></div>
      )}
    </>
  );
}
