function recursiveFibonacci(n) {
    // var n;
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(3))
console.log(recursiveFibonacci(4))
console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))
console.log(recursiveFibonacci(8))
console.log(recursiveFibonacci(9))
console.log(recursiveFibonacci(10))

// types of recursion 
// this is binary recursion 
// linear recursion and binary recursion and tail recursion

//Time complexity  1,2,4,8,16,32,64 => 2^1 , 2^2 , 2^3 
// =>  O(2^n)