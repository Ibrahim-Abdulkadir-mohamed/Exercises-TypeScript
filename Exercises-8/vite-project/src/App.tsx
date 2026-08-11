import { useState } from "react";
import UserStates from "./UserState";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <UserStates/>
      <TodoList/>
    </div>
  );
};

export default App;