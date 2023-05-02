import React from "react";

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h3>Anecdotes</h3>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>{anecdote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
