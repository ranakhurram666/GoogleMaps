import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

import { saveMarkers, displayCreateEditModal, updateMarkers } from "../actions";
import { toast } from "react-toastify";
@connect(store => {
  return {};
})
export default class CreateEditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      lat: null,
      long: null
    };
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.modalInfo.markerInfo &&
      this.props.modalInfo.markerInfo !== newProps.modalInfo.markerInfo
    ) {
      this.setState({
        id: newProps.modalInfo.markerInfo.id,
        name: newProps.modalInfo.markerInfo.name,
        lat: newProps.modalInfo.markerInfo.latitude,
        long: newProps.modalInfo.markerInfo.longitude
      });
    }
  }

  onLocationChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  onLatChange(event) {
    event.preventDefault();
    this.setState({ lat: event.target.value });
  }

  onLongChange(event) {
    event.preventDefault();
    this.setState({ long: event.target.value });
  }

  closeModal() {
    this.setState({ name: "", lat: null, long: null, id: null });
    this.props.dispatch(
      displayCreateEditModal({ display: false, markerInfo: null })
    );
  }

  saveMarker() {
    if (!(this.state.name && this.state.lat && this.state.long)) {
      toast.error("All fields are required");
      return;
    }
    if ((this.state.lat > 85 || this.state.lat < -85) || (this.state.long > 180 || this.state.long < -180)) {
      toast.error("Valid Latitude range [-85, 85] and Valid Longitude range [-180, 180]");
      return;
    }
    const obj = {
      name: this.state.name,
      lat: Number(this.state.lat),
      long: Number(this.state.long)
    };
    if (this.state.id) {
      obj.id = this.state.id;
      this.props.dispatch(updateMarkers(obj));
    } else {
      this.props.dispatch(saveMarkers(obj));
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalInfo.display}
          onRequestClose={this.closeModal}
          style={{ content: { left: "32%", right: "32%" } }}
        >
          <div>
            <h2>Marker</h2>
          </div>
          <div className="card card-body mg-btm-5">
            <div className="form-group row">
              <label className="w85">Location: </label>
              <input
                className=""
                type="text"
                value={this.state.name}
                onChange={this.onLocationChange.bind(this)}
              />
            </div>
            <div className="form-group row">
              <label className="w85">Latitude: </label>
              <input
                className=""
                type="number"
                value={this.state.lat}
                onChange={this.onLatChange.bind(this)}
              />
            </div>
            <div className="form-group row">
              <label className="w85">Longitude: </label>
              <input
                className=""
                type="number"
                value={this.state.long}
                onChange={this.onLongChange.bind(this)}
              />
            </div>
          </div>
          <div className="btn-div">
            <button
              className="button-cls ml0"
              onClick={this.saveMarker.bind(this)}
            >
              Save
            </button>
            <button className="button-cls" onClick={this.closeModal.bind(this)}>
              Close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
