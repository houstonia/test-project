import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchDataApi = async () => {
  const { data } = await axios.get(`${API_URL}/data`);
  return data;
};

export const createDataApi = async (createdData) => {
  const { data } = await axios.post(`${API_URL}/data`, createdData);
  return data;
};

export const deleteDataApi = async (id) => {
  await axios.delete(`${API_URL}/data/${id}`);
};
