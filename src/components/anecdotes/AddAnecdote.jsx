import React, { useState } from "react";
import { createAnecdote } from "../../services/anecdoteService";

const CreateAnecdote = () => {
  const [newAnecdote, setNewAnecdote] = useState(null);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");

  const anecdoteId = Math.round(Math.random() * 10000);
  console.log("generated id", anecdoteId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnecdoteObject = {
      content,
      author,
      info,
      votes: 0,
      id: anecdoteId,
    };
    const response = await createAnecdote(newAnecdoteObject);
    setNewAnecdote(response);
    setNewAnecdote(null);
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
