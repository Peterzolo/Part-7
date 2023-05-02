import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SingleAnecdote = () => {
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

  const id = useParams();
  console.log("ID", id);

  const findAnecdote = anecdotes.find((anecdote) => anecdote.id === id);

  return (
    <div>
      <h3 className="title">Single Anecdote</h3>
      <div className="anecdote-wrap">
        <div className="content">hghghg</div>
      </div>
    </div>
  );
};

export default SingleAnecdote;
