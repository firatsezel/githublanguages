import api from '@/services';

export default async user => {
  const response = await api.get(`search/users?q=${user}`);
  return response;
};
