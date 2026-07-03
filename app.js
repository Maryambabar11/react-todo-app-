import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // New task add karne ka function
  const addTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask('');
  };

  // Task ko complete/uncomplete mark karne ka function
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Task delete karne ka function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h2>Smart Task Planner</h2>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => toggleComplete(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                ✕
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && <p className="empty-msg">No tasks yet. Add some!</p>}
      </div>
    </div>
  );
}

export default App;
