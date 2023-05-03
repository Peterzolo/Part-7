import React, { useEffect, useState } from "react";

import "../../components/anecdotes/Anecdote.css";
import { getAllAnecdotes } from "../../services/anecdoteService";
import { Link } from "react-router-dom";

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
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id} className="list">
            <Link to={`/${anecdote.id}`} className="link">
              {" "}
              {anecdote.content}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
