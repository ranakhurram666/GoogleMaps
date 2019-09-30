import React from "react";
import { connect } from "react-redux";
import {MarkerItem} from './index';

@connect((store) => {
    return {
      markers: store.marker.markers
    };
  })
export default class MarkerList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="card-body">
                {this.props.markers.map((marker) => {
                    return <MarkerItem marker={marker}/>   
                })
                }
            </div>
        )
    }
}