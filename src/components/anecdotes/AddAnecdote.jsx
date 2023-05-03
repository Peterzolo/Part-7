import React, { useState } from "react";
import { createAnecdote } from "../../services/anecdoteService";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";
import { useField } from "../../hooks";

const CreateAnecdote = () => {
  const [newAnecdote, setNewAnecdote] = useState(null);
  const content = useField("");
  const author = useField("");
  const info = useField("");
  const reset = useField("");

  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  const anecdoteId = Math.round(Math.random() * 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnecdoteObject = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
      id: anecdoteId,
    };

    try {
      const response = await createAnecdote(newAnecdoteObject);
      setNewAnecdote(response);
      setNotificationMessage(
        `Anecdote : "${response.content}" created successfully`
      );
      setNotificationType("success");
    } catch (error) {
      setNotificationMessage("Error creating anecdote");
      setNotificationType("error");
    }

    setTimeout(() => {
      setNotificationMessage(null);
      setNotificationType(null);
      navigate("/");
    }, 3000);
  };

  const handleReset = (e) => {
    e.preventDefault();
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2 className="title">create a new anecdote</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <form onSubmit={handleSubmit} className="form-wrap">
        <div>
          <input
            type="text"
            className="form-input"
            name="content"
            placeholder="Content ..."
            value={content.value}
            onChange={content.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-input"
            name="author"
            placeholder="Author ..."
            value={author.value}
            onChange={author.onChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-input"
            name="info"
            placeholder="Url for more info ...."
            value={info.value}
            onChange={info.onChange}
          />
        </div>
        <div className="btn-wrap">
          <button type="submit" className="create-btn">
            Create
          </button>
          <button type="submit" className="reset-btn" onClick={handleReset}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnecdote;
