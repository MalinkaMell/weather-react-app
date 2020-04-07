import React from 'react';

const SearchInput = props => {
  return (
    <React.Fragment>
      <input
        className="form-control"
        type={props.type}
        value={props.input}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        list="cities"
      />
      {/* Adding datalist for faster testing */}
      <datalist id="cities">
        <option value="Chicago" />
        <option value="New York" />
        <option value="Los Angeles" />
      </datalist>
    </React.Fragment>
  )
}

export default SearchInput;