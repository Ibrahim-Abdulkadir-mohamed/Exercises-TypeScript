


// 1. Typed Array

const names: string[] = ["Ibrahim", "Ahmed", "Ali"];

const grades: number[] = [90, 85, 95];

const status: boolean[] = [true, false, true];


// Try pushing wrong types
// names.push(123);       // Error
// grades.push("90");     // Error
// status.push("active"); // Error

console.log(names);
console.log(grades);
console.log(status);



// 2. Convert JavaScript to TypeScript
let products: string[] = ["Phone", "Laptop"];

// products.push(99); // Error: number is not allowed

products.push("Tablet");

console.log(products);


// 3. Tuple

const location: [string, number, number] = [
  "Mogadishu",
  2,
  45,
];

console.log(location);


