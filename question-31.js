// 31. Write a program to repeat a string a specified number of times.Example: Input: ("hello", 3), Output: "hellohellohello"

let str="hello"
let num=3;
let result=""

for(let i=1;i<=num;i++){
    result+=str
}

console.log(result)