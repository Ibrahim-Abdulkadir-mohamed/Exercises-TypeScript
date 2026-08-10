

// 1 convert to typescript

function fullName(first: string, last: string): string {
  return first + " " + last;
}


// 2. Optional and Default Parameters

function registerUser(username: string, isAdmin?: boolean, language: string = "en"){
    console.log(`Username: ${username}, Is Admin: ${isAdmin}, Language: ${language}`);
}

registerUser("John", true, "en");


// 3. Create a Safe Rest Function


function average(...scores: number[]): number {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));