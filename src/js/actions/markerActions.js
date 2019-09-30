import {GET_MARKERS_SUCCESS, Display_CreateEdit_Modal} from './actionTypes';
import {STATUS_OK, STATUS_CREATED, STATUS_UPDATED, STATUS_DELETED} from '../common/utils';
import {getAllMarkerService, saveMarkerService, updateMarkerService, deleteMarkerService} from '../services';

export function getAllMarkers() {
    return function(dispatch) {
        const response = getAllMarkerService().then((response) => {
            console.log('Response: ', response);
            if (response.status === STATUS_OK){
                dispatch(getAllMarkersSuccess(response.data));    
            }
        });
    }
}

export function getAllMarkersSuccess(data) {
    return {type: GET_MARKERS_SUCCESS, payload: data};
}

export function saveMarkers(data) {
    return function(dispatch) {
        const response = saveMarkerService(data).then((response) => {
            console.log('Response: ', response);
            if (response.status === STATUS_CREATED){
                dispatch(displayCreateEditModal({display: false, markerInfo: null}))
                dispatch(getAllMarkers());    
            }
        });
    }
}

export function updateMarkers(data) {
    return function(dispatch) {
        const response = updateMarkerService(data).then((response) => {
            console.log('Response: ', response);
            if (response.status === STATUS_UPDATED){
                dispatch(displayCreateEditModal({display: false, markerInfo: null}))
                dispatch(getAllMarkers());    
            }
        });
    }
}

export function deleteMarker(id) {
    return function(dispatch) {
        const response = deleteMarkerService(id).then((response) => {
            console.log('Response: ', response);
            if (response.status === STATUS_DELETED){
                dispatch(getAllMarkers());    
            }
        });
    }
}

export function displayCreateEditModal(data) {
    return {type: Display_CreateEdit_Modal, payload: data};
}