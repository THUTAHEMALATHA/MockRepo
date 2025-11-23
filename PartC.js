// 10.
function counter(){
    let count=1;
    return function(){
    return count++;
   }
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

// 11.
function createWallet(){
    let balance =0;
    return {
     addMoney : function(amount){ 
            balance += amount;
        },
     checkBalance : function(){
        return balance;
     }   
    };
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700


