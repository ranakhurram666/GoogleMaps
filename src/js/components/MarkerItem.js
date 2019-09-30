import React from "react";
import { connect } from "react-redux";
import { displayCreateEditModal, deleteMarker } from "../actions";

@connect(store => {
  return {};
})
export default class MarkerItem extends React.Component {
  editMarker(e) {
    e.preventDefault();
    this.props.dispatch(
      displayCreateEditModal({ display: true, markerInfo: this.props.marker })
    );
  }

  deleteMarker(e) {
    e.preventDefault();
    this.props.dispatch(deleteMarker(this.props.marker.id));
  }

  render() {
    return (
      <div className="card card-body display-inline">
        <h4>{this.props.marker.name}</h4>
        <div className="">
          <label>
            <b>Latitude: </b>
          </label>
          <label>{this.props.marker.latitude}</label>
        </div>
        <div className="">
          <label>
            <b>Longitude: </b>
          </label>
          <label>{this.props.marker.longitude}</label>
        </div>
        <button className="button-cls ml0" onClick={this.editMarker.bind(this)}>
          Edit
        </button>
        <button className="button-cls" onClick={this.deleteMarker.bind(this)}>
          Delete
        </button>
      </div>
    );
  }
}
