import React, { useEffect, useState } from "react";

import "../../components/anecdotes/Anecdote.css";
import { getAllAnecdotes } from "../../services/anecdoteService";

const AnecdoteList = () => {
  const [anecdotes, setAnecdotes] = useState([]);
  console.log("ANECDOTES ALL", anecdotes);

  useEffect(() => {
    const fetchAllAnecdotes = async () => {
      const response = await getAllAnecdotes();
      setAnecdotes(response);
    };
    fetchAllAnecdotes();
  }, []);
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
