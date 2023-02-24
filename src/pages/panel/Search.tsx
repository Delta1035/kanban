import React from "react";
const Search = (props: any) => {
  const { searchValue, handleChange } = props;
  return (
    <>
      <input type="search" value={searchValue} onChange={handleChange} />
    </>
  );
};

export default Search;
