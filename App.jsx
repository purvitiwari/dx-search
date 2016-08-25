import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        
        <div className="header">
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