import { useEffect, useState } from 'react';
import './App.css';

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      if (tasks.length >= 10) {
      alert("bolee 10 nelzya");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }
  };

  useEffect(() => {
    if (tasks.length > 10) {
      alert("You have over 10 tasks!");
    }
  }, [tasks.length]);

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task" 
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>    
  );
}

export default function App() {
  return (
    <div>
      <ToDoList />
    </div>
  );
}
