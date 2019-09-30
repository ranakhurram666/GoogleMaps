import React from "react";
import { InfoWindow, Marker } from "react-google-maps";
export default class GoogleMapMarker extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Marker position={this.props.position} visible={true}></Marker>
      </div>
    );
  }
}
