import useLocalStorage from "./UseLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage<string>("theme", "dark");

  const [count, setCount] = useLocalStorage<number>("count", 0);

  const [user, setUser] = useLocalStorage<{ name: string; age: number }>(
    "user",
    {
      name: "",
      age: 20,
    }
  );

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <h2>Count: {count}</h2>
      <h3>
        User: {user.name}, Age: {user.age}
      </h3>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setUser({ name: "Ibrahim", age: 20 })}>
        Change User
      </button>
    </div>
  );
}

export default App;