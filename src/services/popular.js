import { api } from "./api";

export const getPopular = async (media_type = "tv") => {
  try {
    const { data } = await api.get(`/${media_type}/popular`);

    return data;
  } catch (error) {
    throw error.message;
  }
};
