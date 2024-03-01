import { api } from "./api";

export const getProgram = async (typeProgram, programId) => {
  try {
    const { data } = await api.get(`/${typeProgram}/${programId}`);

    return data;
  } catch (error) {
    throw error.message;
  }
};
