import React, { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../api";
import TaskItem from "./TaskItems";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then((data) => {
      console.log("Fetched tasks from backend:", data); // ✅ Log the value
      setTasks(data);
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const updatedTask = updatedTasks.find((task) => task.id === id);
    await updateTask(id, updatedTask); // PUT with updated completed
  };

  const handleEdit = (task) => {
    navigate(`/edit/${task.id}`, { state: task }); // go to form with state
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      ))}
    </ul>
  );
}
