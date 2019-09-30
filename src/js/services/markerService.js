// 3rd party imports
import axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json"
  }
};
const baseUrl = `http://0.0.0.0:5000`;

export function getAllMarkerService() {
  const url = `${baseUrl}/markers`;
  return axios.get(url, headers).then(response => {
    return response;
  });
}

export function saveMarkerService(data) {
  const url = `${baseUrl}/markers`;
  return axios.post(url, data, headers).then(response => {
    return response;
  });
}

export function updateMarkerService(data) {
  const url = `${baseUrl}/markers/${data.id}`;
  return axios.put(url, data, headers).then(response => {
    return response;
  });
}

export function deleteMarkerService(id) {
  const url = `${baseUrl}/markers/${id}`;
  return axios.delete(url, headers).then(response => {
    return response;
  });
}
