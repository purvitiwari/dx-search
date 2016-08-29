import React from 'react';
import { connect } from 'react-redux';
import {search} from '../../redux/actions/searchAction.jsx'
import { Link } from 'react-router';

@connect((store) => (
{

    city: store.city,
    area: store.area,
    test: store.test
  }
))
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      area: '',
      test: ''
    };
    this.changeCity = this.changeCity.bind(this);
    this.changeArea = this.changeArea.bind(this);
    // this.changeTest = this.changeTest.bind(this);
    this.searchData = this.searchData.bind(this);
  }
  searchData(){
    const dataToSend = this.state;
    this.props.dispatch(search(dataToSend));
  }

  changeCity(data){
    this.state.city = data.target.value;
  }

  changeArea(data){
    this.state.area = data.target.value;
  }

  changeTest(data){
    this.state.test = data.target.value;
  }

  render() {
    return (
      <div className="search-form">
           <input className="search-form-city" type="text" placeholder="Enter city" onChange={this.changeCity}/>
           <input  className="search-form-area" type="text" placeholder="Enter area" onChange={this.changeArea}/>
           <button  className="search-form-submit"><Link to="/center" className="search-form-link" onClick={this.searchData}>Submit</Link></button>
      </div>
    );
  }
}

export default Search;

