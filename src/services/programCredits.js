import { api } from "./api";

export const getProgramCredits = async (typeProgram, programId) => {
  try {
    const { data } = await api.get(`/${typeProgram}/${programId}/credits`);

    return data;
  } catch (error) {
    throw error.message;
  }
};
