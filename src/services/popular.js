import { api } from "./api";

export const getPopular = async () => {
  try {
    const { data } = await api.get(`/trending/movie/${period}`);

    return data;
  } catch (error) {
    // throw error.message;
  }
};
