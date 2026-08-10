// Echo Function with Generics
function echo<T>(input: T): T {
    return input;
}

console.log(echo("Hello, world!"));
console.log(echo(123));
console.log(echo([1, 2, 3]));
console.log(echo({ name: "John", age: 30 }));

// 2. Generic Interface

interface apiResponse<T> {
    data: T;
    status: string;
    message: string;
}

const response: apiResponse<{ name: string }> = {
    
    data: { name: "John" },
    status: "hello",
    message: "Success",
};

console.log(response);

// 3. First Element Function

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["hello", "world"]));
console.log(firstElement([{ name: "John", age: 30 }]));

