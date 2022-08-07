import api from '@/services';

export default async name => {
  const response = await api.get(`repos/${name}/languages`);
  return response;
};
