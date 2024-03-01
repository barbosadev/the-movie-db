import { api } from "./api";

export const getTrendingPrograms = async (period = "day") => {
  try {
    const { data } = await api.get(`/trending/all/${period}`);

    return data;
  } catch (error) {
    throw error.message;
  }
};
