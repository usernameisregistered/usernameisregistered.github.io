import axios from 'axios';
const isDev = import.meta.env.MODE === 'development';
axios.interceptors.request.use(function (config) {
    config.url = '/api' + config.url;
    return config;
}, function (error) {
    return null;
});
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