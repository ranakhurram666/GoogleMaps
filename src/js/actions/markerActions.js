import { toast } from "react-toastify";

import { GET_MARKERS_SUCCESS, Display_CreateEdit_Modal } from "./actionTypes";
import {
  STATUS_OK,
  STATUS_CREATED,
  STATUS_UPDATED,
  STATUS_DELETED
} from "../common/utils";
import {
  getAllMarkerService,
  saveMarkerService,
  updateMarkerService,
  deleteMarkerService
} from "../services";

export function getAllMarkers() {
  return function(dispatch) {
    const response = getAllMarkerService()
      .then(response => {
        console.log("Response: ", response);
        if (response.status === STATUS_OK) {
          dispatch(getAllMarkersSuccess(response.data));
        }
      })
      .catch(() => {
        toast.error("An error occurred while loadng markers");
      });
  };
}

export function getAllMarkersSuccess(data) {
  return { type: GET_MARKERS_SUCCESS, payload: data };
}

export function saveMarkers(data) {
  return function(dispatch) {
    const response = saveMarkerService(data)
      .then(response => {
        console.log("Response: ", response);
        if (response.status === STATUS_CREATED) {
          toast.success("Marker created successfully");
        } else {
          toast.error("An error occurred");
        }
        updateUI(dispatch);
      })
      .catch(() => {
        toast.error("An error occurred");
        updateUI(dispatch);
      });
  };
}

export function updateMarkers(data) {
  return function(dispatch) {
    const response = updateMarkerService(data)
      .then(response => {
        console.log("Response: ", response);
        if (response.status === STATUS_UPDATED) {
          toast.success("Marker updated successfully");
        } else {
          toast.error("An error occurred");
        }
        updateUI(dispatch);
      })
      .catch(() => {
        toast.error("An error occurred");
        updateUI(dispatch);
      });
  };
}

export function deleteMarker(id) {
  return function(dispatch) {
    const response = deleteMarkerService(id)
      .then(response => {
        console.log("Response: ", response);
        if (response.status === STATUS_DELETED) {
          toast.success("Marker deleted successfully");
        } else {
          toast.error("An error occurred");
        }
        dispatch(getAllMarkers());
      })
      .catch(() => {
        toast.error("An error occurred");
        dispatch(getAllMarkers());
      });
  };
}

export function displayCreateEditModal(data) {
  return { type: Display_CreateEdit_Modal, payload: data };
}

function updateUI(dispatch) {
    dispatch(displayCreateEditModal({ display: false, markerInfo: null }));
    dispatch(getAllMarkers());
}