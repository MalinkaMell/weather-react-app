import React from 'react';
import Button from '../button/Button';
import SearchInput from '../input/Searchinput';


const SearchContainer = props => {
  return (
    <form className="w-100 px-2 mt-3">
      <div className="input-group mb-3">
        <SearchInput handleChange={props.handleChange} input={props.input} type="text" placeholder="Enter City" />
        <div className="input-group-append" >
          <Button handleSubmit={props.handleSubmit} type="submit" class="btn btn-primary" btnValue="Search" />
        </div>
      </div>
    </form>
  )
}

export default SearchContainer;