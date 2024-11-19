import axios, { AxiosResponse } from 'axios';

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAxios = () => {
    const createdAxios = axios.create({
        baseURL: `${BASE_URL}/api`,
        timeout: 40000, // 40 segundos
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
            Authorization: `Bearer seu-token-aqui`,
        },
    });

    createdAxios.interceptors.response.use(getAxiosResponse);
    return createdAxios;
};

const getAxiosResponse = (response: AxiosResponse) => {
    return response.data;
};
