import axios from 'axios';
import { BACKEND_BASE_URL, JWT_EXPIRED_CODE } from './index';

const axiosAPI = axios.create({
    baseURL: BACKEND_BASE_URL
});

axiosAPI.interceptors.request.use(function (request) {
    if (request.url !== `/authenticate`) {
        request.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        request.headers['Content-Type'] = 'application/json'
    }
    return request;
}, function (error) {
    return Promise.reject(error);
});

axiosAPI.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        let response = error.response;
        if (response.data.errorCode === JWT_EXPIRED_CODE) {
            localStorage.removeItem("jwt_token");
            window.location.href = `${process.env.REACT_APP_BASE_URL}/signin`; 
        }
    }
    return Promise.reject(error);
});

export default axiosAPI;