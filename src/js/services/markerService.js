// 3rd party imports
import axios from 'axios';

// Application imports
import {getHeaders} from '../common/utils';

export function getAllMarkerService() {
    const headers = getHeaders();
    const url = `http://0.0.0.0:5000/markers`;
    return axios.get(url, headers).then((response) => {
        return response;
    })
}

export function saveMarkerService(data) {
    const headers = getHeaders();
    const url = `http://0.0.0.0:5000/markers`;
    return axios.post(url, data, headers).then((response) => {
        return response;
    })
}

export function updateMarkerService(data) {
    const headers = getHeaders();
    const url = `http://0.0.0.0:5000/markers/${data.id}`;
    return axios.put(url, data, headers).then((response) => {
        return response;
    })
}

export function deleteMarkerService(id) {
    const headers = getHeaders();
    const url = `http://0.0.0.0:5000/markers/${id}`;
    return axios.delete(url, headers).then((response) => {
        return response;
    })
}
