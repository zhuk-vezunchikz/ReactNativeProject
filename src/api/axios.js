import axios from 'axios';

const instance = axios.create({
    baseURL: '',
});

export const getTargetPockemonRequest = (url) => {
    return axios.get(url)
}

export const makeRequest = (config) => instance(config);


