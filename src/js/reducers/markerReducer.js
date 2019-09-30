import {GET_MARKERS_SUCCESS, Display_CreateEdit_Modal} from '../actions/actionTypes';

const initialState = {
    displayLoader: false,
    modalInfo: {display: false, markedInfo: null},
    markers: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_MARKERS_SUCCESS: {
            const markers = action.payload;
            return Object.assign({}, state, {markers});
        }
        case Display_CreateEdit_Modal: {
            const modalInfo = action.payload;
            return Object.assign({}, state, {modalInfo});            
        }
        default:
            return state;
    }
}