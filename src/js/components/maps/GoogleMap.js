import React from "react";
import { compose, withProps, lifecycle } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs, Circle, InfoWindow, Marker } from "react-google-maps";

import{GoogleMapMarker} from '../mapMarkers';

export default class GoogleMaps extends React.Component {
    constructor() {
        super();
        this.state = {
            mapCenter: {
                lat: 51.3396955,
                lng: 12.3730747
            }
        }
    }    
    render() {
        return(
            <div className="container-fluid">
                <MapComponent isMarkerShown={true} data={[]} search={[]} center={this.state.mapCenter}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwAyvJfR76LTfdipoX5MkBDg2btCgMGfk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%`, width: 'auto', overflow: `visible` }} />}
                containerElement={<div style={{ height: `100%`, width: 'auto', overflow: `visible` }} />}
                mapElement={<div style={{ height: 450 + 'px', overflow: `visible` }} />} />
          </div>
        )
    }
}

const MapComponent = compose(withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
      }
    }))((props) =>
      <GoogleMap
        defaultOptions={{ mapTypeControl: false }}
        defaultZoom={7} center={props.center}
        defaultCenter={props.center} style={{ position: 'static', overflow: 'visible' }}
      >
        {/* {props.isMarkerShown && props.data.map((location) => {
          return ( */}
            <GoogleMapMarker key={12} position={{ lat: 51.3396955, lng: 12.3730747 }} />)
        // })
        // }
      </GoogleMap>)