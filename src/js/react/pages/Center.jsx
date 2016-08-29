import React from 'react';
import Search from '../components/Search.jsx';
import Header from '../components/Header.jsx';
import Description from '../components/Description.jsx';

class Center extends React.Component {
  render() {
    return (
      <div className="main">
        
        <div className="header">
          <Header/>
        </div>
        
        <div className="search">
          <Search/>
        </div>

        <div className="description">
          <Description/>
        </div>

      </div>
      );
  }
}

export default Center
