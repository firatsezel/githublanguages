import api from '@/services';

export default async user => {
  const response = await api.get(`users/${user}/repos`);
  return response;
};
