import React from 'react';
import ReactDOM from 'react-dom';

export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    console.log("mounted");
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      console.log("google available");
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    else {
      console.log("google not available");
    }
  }

  render() {
    return (
    <div ref='map'>
      Loading..
    </div>
   )
  }
}

export default Map;
