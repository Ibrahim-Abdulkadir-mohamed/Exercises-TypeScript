import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTodo = () => {
    if (newTask.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      task: newTask,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.done ? "done" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;