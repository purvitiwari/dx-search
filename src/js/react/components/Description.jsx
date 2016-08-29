import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store.jsx'

@connect((store) => (
  {
    search_result: store.search_result,
  }
))

class Description extends React.Component {
  render() {
    return (
      <div className="description">
          {this.props.search_result.map((result,i) => 
            <div key={i} className="result-field">
              <div className="result-name">
                {result.name}
              </div>
              <div className="result-address">
                {result.address}
              </div>
              <hr />
            </div>  
          )}
      </div>
    );
  }
}

export default Description;
