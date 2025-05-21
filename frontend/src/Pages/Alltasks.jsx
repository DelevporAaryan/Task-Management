// src/Pages/Alltasks.jsx
import { useState, useEffect } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h1>All Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong>: {task.description} -
            {task.completed ? " Completed" : " Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
