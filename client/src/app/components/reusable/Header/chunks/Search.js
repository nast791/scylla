import React from 'react';
import {SearchBody, SearchInput} from "../_styles/search.style";

const Search = () => {
  return (
    <SearchBody>
      <SearchInput placeholder="Поиск" type="text" name="search"/>
    </SearchBody>
  );
};

export default Search;