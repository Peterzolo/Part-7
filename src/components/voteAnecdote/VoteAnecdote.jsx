import React, { useState } from "react";

const VoteAnecdote = () => {
  const [anecdotes, setAnecdotes] = useState();
  const vote = (id) => {
    const anecdoteById = (id) => anecdotes.find((a) => a.id === id);
    const anecdote = anecdoteById(id);
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return <div></div>;
};

export default VoteAnecdote;
