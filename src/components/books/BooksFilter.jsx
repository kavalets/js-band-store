import { useBooks } from 'context/BooksContext';

export function BooksFilter() {
  const { booksFilter, filterSort, filterSearch } = useBooks();

  return (
    <div className="box filter flex top">
      <div className="filter__input input">
        <label className="input__label" htmlFor="searchBook">
          Search by book name
        </label>
        <input
          className="input__model"
          type="text"
          placeholder="Type book name"
          value={booksFilter.search}
          onChange={event => filterSearch(event.currentTarget.value)}
          id="searchBook"
        />
      </div>
      <div className="filter__input input">
        <label className="input__label" htmlFor="sortPrice">
          Sort by price
        </label>
        <select
          className="input__model input__model--select"
          onChange={event => filterSort(event.currentTarget.value)}
          value={booksFilter.sort}
          id="sortPrice"
        >
          <option value="ALL">Original</option>
          <option value="LOW_TO_HIGH">Low to High</option>
          <option value="HIGH_TO_LOW">High to Low</option>
        </select>
      </div>
    </div>
  );
}
