// Imports
import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  // State hooks for managing todo list and new tasks
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Record task
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add task
  const addTask = () => {
    // Create task object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    // Update todo list with new task
    setToDoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  // Delete task
  const deleteTask = (id) => {
    // Filter out the task with the provided id
    const updatedTodoList = todoList.filter((task) => task.id !== id);
    // Update the todo list state with the filtered list
    setToDoList(updatedTodoList);
  };

  // Complete Task
  const completeTask = (id) => {
    // Update todo list
    setToDoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  // JSX rendering of the App component
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {/* Mapping over todoList array to render Task component for each task */}
        {todoList.map((task) => (
          // <div key={task.id} className="task">
          //   <h1>{task.taskName}</h1>
          //   <button className="complete" onClick={() => completeTask(task.id)}>
          //     Completed
          //   </button>
          //   <button className="delete" onClick={() => deleteTask(task.id)}>
          //     X
          //   </button>
          // </div>
          <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
