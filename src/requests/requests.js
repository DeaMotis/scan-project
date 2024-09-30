import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru';

const scanApi = axios.create({
    baseURL: BASE_URL,
});

scanApi.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    config.headers.Accept = 'application/json';

    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token).accessToken}`;
    } else {
        delete config.headers.Authorization;
    }

    return config;
});

//  try-catch для обработки ошибок
export const login = async (login, password) => {
    try {
        return await scanApi.post('/api/v1/account/login', { login, password });
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Можно выбросить ошибку или вернуть какой-то кортеж с ошибкой
    }
};

export const accInfo = async () => {
    try {
        return await scanApi.get('/api/v1/account/info');
    } catch (error) {
        console.error('Account Info error:', error);
        throw error;
    }
};

export const reqHistograms = async (params) => {
    try {
        return await scanApi.post('/api/v1/objectsearch/histograms', params);
    } catch (error) {
        console.error('Request Histograms error:', error);
        throw error;
    }
};

export const reqObjectSearch = async (params) => {
    try {
        return await scanApi.post('/api/v1/objectsearch', params);
    } catch (error) {
        console.error('Request Object Search error:', error);
        throw error;
    }
};

export const reqDocuments = async (params) => {
    try {
        return await scanApi.post('/api/v1/documents', params);
    } catch (error) {
        console.error('Request Documents error:', error);
        throw error;
    }
};
