import React, { useEffect, useState } from "react";
import { getAllAnecdotes } from "../../services/anecdoteService";
import { Link } from "react-router-dom";

import "../../components/anecdotes/Anecdote.css";
const AnecdoteList = () => {
  const [anecdotes, setAnecdotes] = useState([]);

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
        {anecdotes &&
          anecdotes.map((anecdote) => (
            <li key={anecdote.id} className="list">
              <Link to={`/${anecdote.id}`} className="link">
                {anecdote.content}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
