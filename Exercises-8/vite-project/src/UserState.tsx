
import { useState } from "react";

interface User {
  username: string;
  email: string;
}

function UserStates() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <button onClick={() => setUser({ username: "Ibrahim", email: "test@test.com" })}>
        Login
      </button>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserStates