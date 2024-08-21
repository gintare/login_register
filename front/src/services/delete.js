import axios from 'axios';
import { getDefaultToken } from './service';
const API_URL = import.meta.env.VITE_API_URL;

export const deleteData = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/${id}`);
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting data ${error.message}`);
  }
};

export const deleteCategory = async (id) => {
  try {
    const userToken = getDefaultToken();
    const resp = await axios.delete(`${API_URL}/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Cache-Control': 'no-cache',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting data ${error.message}`);
  }
};
