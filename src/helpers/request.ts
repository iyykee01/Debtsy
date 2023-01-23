import axios from "axios";
import { endPoint } from "./config";

const useRequest = {
  get: async ({ path }: { path: string }) => {
    const response = await axios.get(`${endPoint}${path}`);
    return response.data;
  },

  post: async ({ path, data }: { path: string; data: any }) => {
    const response = await axios.post(`${endPoint}${path}`, data);
    return response.data;
  },

  patch: async ({ path, data }: { path: string; data: any }) => {
    const response = await axios.patch(`${endPoint}${path}`, data);
    return response.data;
  },

  delete: async ({ path }: { path: string }) => {
    const response = await axios.delete(`${endPoint}${path}`);
    return response.data;
  },
};

export default useRequest;
