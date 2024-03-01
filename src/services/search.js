import { api } from "./api";

export const getSearchResult = async (query) => {
  try {
    const { data } = await api.get(
      `/search/multi?query=${query}&include_adult=false`
    );

    return data;
  } catch (error) {
    throw error.message;
  }
};
