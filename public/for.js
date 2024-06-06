let arr = [1,2,3,4,5,6]
let obj = {a:1,b:2,c:3,d:4,e:5}



let sum = 0
arr.forEach((ele)=>{
    sum+=ele
})
console.log(sum,"each")

let value = 0
for(let i in obj){
    value+=obj[i]
}
console.log(value,"in");

let val = 0
for(let i of arr){
    val+=i
}
console.log(val,"of")


let res = arr.reduce((acc,curr)=>{
   return acc+=curr
},0)
console.log(res)


let odi = arr.filter((x)=>{
    if(x%2==0){
        return x
    }
})
console.log(odi)


let adi = arr.map((x)=>{
    return x*x
})
console.log(adi)


