import React from "react";
const Search = ({ onSubmit, onChange }) => {
  return (
    <div>
      <input type="text" onChange={e => onChange(e.target.value)} />
      <button onClick={() => onSubmit()}>Search</button>
    </div>
  );
};
export default Search;
