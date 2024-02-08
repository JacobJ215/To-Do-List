// Task Component
export const Task = (props) => {
  return (
    // Task container
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button className="complete" onClick={() => props.completeTask(props.id)}>
        Completed
      </button>
      <button className="delete" onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </div>
  );
};
