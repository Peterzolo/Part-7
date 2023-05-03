import React, { useState } from "react";
import { createAnecdote } from "../../services/anecdoteService";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";

const CreateAnecdote = () => {
  const [newAnecdote, setNewAnecdote] = useState(null);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  const anecdoteId = Math.round(Math.random() * 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnecdoteObject = {
      content,
      author,
      info,
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

  return (
    <div>
      <h2 className="title">create a new anecdote</h2>
      <Notification message={notificationMessage} type={notificationType} />
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
