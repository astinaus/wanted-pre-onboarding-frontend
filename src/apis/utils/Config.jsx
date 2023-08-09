import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const axiosApi = (BASE_URL, options) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    ...options,
  });

  return instance;
};

const axiosAuthApi = (BASE_URL, options) => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });

  return instance;
};

export const axiosApiInstance = axiosApi(BASE_URL);
export const axiosAuthApiInstance = axiosAuthApi(BASE_URL);
