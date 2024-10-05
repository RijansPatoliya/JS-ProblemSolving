// 20. Find and print the difference between the maximum and minimum elements in arr = [80, 30, 70, 50, 20].


let arr = [80, 30, 70, 50, 20];

let max = Math.max(...arr);
let min = Math.min(...arr);

let difference = max - min;

console.log(difference);