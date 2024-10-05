// 16. Check if all the elements in arr = [3, 5, 9, 1, 7] are positive numbers, and print true or false.[doubt]

let arr=[1,2,-3,4,5]
let positive=0;


for(let i=0;i<arr.length;i++){

    if(arr[i]>0){
        positive++
}
}
if(positive>0){
    console.log("true");
}else{
    console.log("false");
}