import React, { useState } from "react";

import "../../components/anecdotes/Anecdote.css";

const AnecdoteList = () => {
  const [anecdotes, setAnecdotes] = useState([]);
  return (
    <div className="anecdote-list-wrap">
      <h3 className="title">Anecdotes</h3>
      <ul className="list-wrap">
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id} className="list">
            {anecdote.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
