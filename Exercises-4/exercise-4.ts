// 1. Define and Use an Interface

interface User {
  username: string;
  email: string;
}

function login(user: User): string {
  return `Login successful for ${user.username} with email ${user.email}`;
}

console.log(login({ username: "John", email: "john@example.com" }));

// 2. Use Optional Properties

interface User2 {
  username: string;
  email?: string;
}

function login2(user: User2): string {
  return `Login successful for ${user.username} with email ${ user.email || "no email provided" }`;
}

console.log(login2({ username: "John", email: "john@example.com" }) || "No login successful");

// 3. Use Readonly Properties

interface User3 {
  readonly username: string;
  email: string;
}

function login3(user: User3): string {
  return `Login successful for ${user.username} with email ${user.email}`;
}

console.log(login3({ username: "John", email: "john@example.com" }) || "No login successful");
