import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleAnecdote,
  voteAnecdote,
} from "../../services/anecdoteService";

const SingleAnecdote = () => {
  const [anecdote, setAnecdote] = useState([]);
  const [votes, setVotes] = useState(0);

  console.log("ANECDOTE", anecdote);
  console.log("ANECDOTE VOTES", votes);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleAnecdote(id);
      setAnecdote(data);
      setVotes(data.votes);
    };
    fetchData();
  }, [id]);

  const handleVote = async () => {
    const updatedAnecdote = { ...anecdote, votes: votes + 1 };
    const response = await voteAnecdote(updatedAnecdote);
    setVotes(response.votes);
  };

  return (
    <div>
      <h3 className="title">Single Anecdote</h3>
      <div className="anecdote-wrap">
        <div className="content">{anecdote.content}</div>
        <div className="vote-wrap">
          <div className="vote-body">{votes}</div>
          <h6 className="vote-title">Vote</h6>
          <button className="vote-btn" onClick={handleVote}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAnecdote;
