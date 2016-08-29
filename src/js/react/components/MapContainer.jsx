import React from 'react';
import GoogleApiComponent from '../../../../node_modules/google-maps-react/dist/GoogleApiComponent';
import Map from './Map.jsx';

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      zIndex: +100,
    };
    if (!this.props.loaded) {
      return (<div>
        Loading...
        </div>);
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container);
