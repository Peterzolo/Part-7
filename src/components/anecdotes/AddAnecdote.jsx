import React, { useState } from "react";

const CreateAnecdote = () => {
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

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");

  const anecdoteId = Math.round(Math.random() * 10000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnecdoteObject = {
      content,
      author,
      info,
      votes: 0,
      id: anecdoteId,
    };

    setAnecdotes(anecdotes.concat(newAnecdoteObject));
  };

  return (
    <div>
      <h2 className="title">create a new anecdote</h2>
      <form onSubmit={handleSubmit} className="form-wrap">
        <div>
          <input
            className="form-input"
            name="content"
            placeholder="Content ..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-input"
            name="author"
            placeholder="Author ..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-input"
            name="info"
            placeholder="Url for more info ...."
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button type="submit" className="create-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateAnecdote;
