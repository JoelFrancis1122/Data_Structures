//Fibonacci Sequence

function Fibonacci(n){
    const fib =[0,1]
    for(let i=2;i<n ; i ++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(Fibonacci(5))
// console.log(Fibonacci(3))
// console.log(Fibonacci(4))
