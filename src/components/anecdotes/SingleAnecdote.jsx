import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleAnecdote } from "../../services/anecdoteService";

const SingleAnecdote = () => {
  const [anecdote, setAnecdote] = useState([]);
  console.log("ANECDOTE", anecdote);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleAnecdote(id);
      setAnecdote(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h3 className="title">Single Anecdote</h3>
      <div className="anecdote-wrap">
        <div className="content">{anecdote.content}</div>
      </div>
    </div>
  );
};

export default SingleAnecdote;
