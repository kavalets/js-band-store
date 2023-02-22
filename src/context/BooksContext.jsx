import { createContext, useContext, useEffect, useState } from 'react';

const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState({
    standard: [],
    filtered: [],
  });

  const [booksCatch, setBooksCatch] = useState({
    error: false,
    loaded: false,
    message: 'Please wait...',
  });

  const [booksFilter, setBooksFilter] = useState({
    sort: 'ALL',
    search: '',
  });

  const filterSort = price => {
    setBooksFilter(prev => ({ ...prev, sort: price }));
  };

  const filterSearch = name => {
    setBooksFilter(prev => ({ ...prev, search: name }));
  };

  const value = {
    books,
    booksCatch,
    booksFilter,
    filterSort,
    filterSearch,
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          'https://kavalets.com/sites/books/books.json'
        );
        const responseJson = await response.json();
        setBooks(prev => ({ ...prev, standard: responseJson.books }));
      } catch (error) {
        setBooksCatch({
          error: true,
          loaded: true,
          message: error.message,
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!booksCatch.error && books.standard.length > 0) {
      setBooks(prev => ({ ...prev, filtered: [] }));
      setBooksCatch(prev => ({
        ...prev,
        loaded: false,
        message: 'Please wait...',
      }));

      const timer = setTimeout(() => {
        const sorted = [...books.standard]
          .sort((a, b) => {
            return booksFilter.sort === 'LOW_TO_HIGH'
              ? +a.price - +b.price
              : booksFilter.sort === 'HIGH_TO_LOW'
              ? +b.price - +a.price
              : void 0;
          })
          .filter(item =>
            item.title.toLowerCase().includes(booksFilter.search.toLowerCase())
          );

        setBooks(prev => ({ ...prev, filtered: sorted }));
        setBooksCatch(prev => ({
          ...prev,
          loaded: true,
          message: sorted.length > 0 ? '' : 'Oops, Books Not Found',
        }));
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [books.standard, booksCatch.error, booksFilter.search, booksFilter.sort]);

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}
