import React, { useState } from "react";
import { addTask } from "../api";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ title});
    navigate("/"); // go back to task list
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
