import React from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import { GoogleMap } from "./maps";
import { CreateEditModal, MarkerList } from "./index";
import { getAllMarkers, displayCreateEditModal } from "../actions";

@connect(store => {
  return {
    markers: store.marker.markers,
    modalInfo: store.marker.modalInfo
  };
})
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      displayModal: false
    };
  }

  componentWillMount() {
    this.props.dispatch(getAllMarkers());
  }

  componentDidMount() {}

  closeCreateEditModal() {
    this.setState({ displayModal: false });
  }

  openCreateEditModal(e) {
    e.preventDefault();
    this.props.dispatch(
      displayCreateEditModal({ display: true, markerInfo: {} })
    );
  }

  render() {
    return (
      <div>
        <GoogleMap markers={this.props.markers}></GoogleMap>
        <br />
        <button
          className="button-cls"
          onClick={this.openCreateEditModal.bind(this)}
        >
          Add Marker
        </button>
        <MarkerList />
        <CreateEditModal
          modalInfo={this.props.modalInfo}
          closeModal={this.closeCreateEditModal.bind(this)}
        ></CreateEditModal>
        <ToastContainer />
      </div>
    );
  }
}
