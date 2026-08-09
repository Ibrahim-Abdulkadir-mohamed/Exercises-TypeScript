// const ProductName : string = "iPhone 15";
// const Price : number = 1000;
// const discountAvailable : boolean = true;

// error: cannot reassign a value to a constant
// ProductName  = 100;
// Price = "500";
// discountAvailable = "yes";

// correct way to assign a value to a constant
// ProductName = "iPhone 16";
// Price = 1500;
// discountAvailable = false;

// console.log(`Product Name: ${ProductName}`);
// console.log(`Price: ${Price}`);
// console.log(`Discount Available: ${discountAvailable}`);


// function getDiscount(price: number, discount: number): number {
//     return price - price * discount;
//   }
  
//   console.log(getDiscount(100, 0.2));
  



function printLength(x: unknown) {
    if (typeof x === 'string') {
      console.log(x.length);
    } 
  }

//   printLength("Hello"); // should work
//   printLength(123); // should work