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

export const createAnecdote = async (anecdoteData) => {
  const response = await axios.post(baseUrl, anecdoteData);
  return response.data;
};

export const voteAnecdote = async (anecdoteData) => {
  const response = await axios.put(
    `${baseUrl}/${anecdoteData.id}`,
    anecdoteData
  );
  return response.data;
};
