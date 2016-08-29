import React from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
// import GoogleApiComponent from '../components/MapContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="sub-main">
        
        <div className="header-main">
          <Header/>
        </div>
        
        <div className="search">
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
