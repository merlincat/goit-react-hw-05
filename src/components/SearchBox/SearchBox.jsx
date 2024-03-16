import css from './SearchBox.module.css';
const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
