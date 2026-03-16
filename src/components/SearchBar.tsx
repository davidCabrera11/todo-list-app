import toggleIcon from '../assets/ic_theme_toggle.svg';

export const SearchBar = () => {
  return (
    <div className='search-container'>
      <form className='form search-note'>
        <input type='text' name='text' id='text' placeholder='Search note...' />
      </form>
      <button className='all-btn'>ALL</button>
      <button className='toggle-btn'>
        <img src={toggleIcon} alt='Search' />
      </button>
    </div>
  );
};
