import React from 'react';

const Filter = ({ filter, handleTofind }) => {
  return (
    <div>
      <label style={{marginLeft:"11px",}}>
        Find contacts by name
        <input style={{marginLeft:"11px",}}
          type="text"
          name="filter"
          placeholder="To find"
          value={filter}
          onChange={handleTofind}
        />
      </label>
    </div>
  );
};

export default Filter;