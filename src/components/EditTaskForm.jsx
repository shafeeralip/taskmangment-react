import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateTask } from "../api";

export default function EditTaskForm() {
  const navigate = useNavigate();
  const { state: task } = useLocation(); // ✅ Get passed task data

  // State initialized from the task passed via router state
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = {
      id: task.id,
      title,
      completed,
    };

    console.log("tasssksss",updated)
    await updateTask(task.id, updated);
    navigate("/"); // ✅ Go back to task list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>

      <label>
        Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>


      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </label>

      <button type="submit">Update Task</button>
    </form>
  );
}
