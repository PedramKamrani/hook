import Card from "./../../UI/Card/Card"
import React from 'react'
const Search = React.memo((props) => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label> جست وجو </label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
