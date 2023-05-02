import React, { useState } from "react";

import "../../components/anecdotes/Anecdote.css";

const AnecdoteList = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
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
