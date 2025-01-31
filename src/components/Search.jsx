import PropTypes from 'prop-types';

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="Search Icon" />

            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a movie" />
        </div>
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
export default Search;