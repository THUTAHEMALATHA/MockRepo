// 8.
let nums = [10, 3, 7, 20, 13, 2];
// map
let squares=nums.map(n=>n*n);
console.log("squares",squares);
// filter
function isPrime(n){
    if(n<2)
        return false;
    for(let i=2; i*i<=n; i++){
        if(n%i===0) return false;
    }
    return true;
}
let primes=nums.filter(isPrime);
console.log("primes",primes);
// reduce
let sum=nums.reduce((acc,curr)=>acc+curr, 0);
console.log("sum",sum);
// sort
let descending = nums.slice().sort((a,b)=>b-a);
console.log("descnding order",descending);


// 9
function displayCar(){
    console.log("car detailes displayed");
}
function displayTruck(){
    console.log("Truck detailes displayed");
}
function displayBike(){
    console.log("Bike detailes displayed");
}
function vehicleInfo(vehicleCategory, callbackFn){
    console.log("vehicle Category:" vehicleCategory);
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
