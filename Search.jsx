import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <form>
           <input type="text" placeholder="Enter location"></input>
           <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Search;