import React from 'react';

const SearchBox = ({onSearchChange}) => {
  return(
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type = 'search'
      placeholder='Search Robots'
      onChange={onSearchChange}
    />
  );

}

export default SearchBox;
