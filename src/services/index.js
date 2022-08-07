import axios from 'axios';
import * as Config from '@/utils/Config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const handleError = async ({message, config, data, status}) => {
  return Promise.reject({message});
};

instance.interceptors.request.use(
  async config => {
    return config;
  },
  async error => {
    return Promise.reject({...error});
  },
);

instance.interceptors.response.use(
  async response => {
    const statusCode = response.status;
    const data = response.data;
    if (statusCode === 200) {
      return data;
    } else {
      const {message} = data;
      const {config, status} = response.config;
      return handleError({message, config, data, status});
    }
  },
  async error => {
    return Promise.reject({...error.response.data});
  },
);

export default instance;
