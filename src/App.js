import { useState } from "react";
import AnecdoteList from "./components/anecdotes/AnecdoteList";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import CreateAnecdote from "./components/anecdotes/AddAnecdote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import SingleAnecdote from "./components/anecdotes/SingleAnecdote";

const App = () => {
  const [notification, setNotification] = useState("");

  return (
    <div className="container">
      <h1>Software anecdotes</h1>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<AnecdoteList />} />
          <Route path="/:id" element={<SingleAnecdote />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateAnecdote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
