// 1.Spread Operator
let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let combined =[...arr1, ...arr2];

// 2. Spread Operator (Object)
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
 let profile = {...person, ...extra};

//  3. Rest Operator (Function Parameters)
function sumAll(...args){
    return args.reduce((sum,num) => sum +num ,0);
}

// 4. Rest Operator (Array Destructuring)
let numbers = [10, 20, 30, 40, 50];
let[a, ...remaining] = numbers;

// 5. Nested Object Destructuring
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const {address: {city ,geo:{lat,lng}}} = user;

// 6.Arrow Function
const multiply = (a,b) => a*b ;

// 7. Optional Chaining
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let role=emp?.detailes?.profile?.role;
