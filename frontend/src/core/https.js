import axios from 'axios';
axios.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    }
    return response;
}, function (error) {
    return null;
});
export function loadJSON(url) {
    return axios.get(url)
}

export function loadHTML(url) {
    return axios.get(url)
}