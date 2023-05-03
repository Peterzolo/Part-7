import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getSingleAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
