// 19. Check if the array arr = [1, 2, 3, 4, 5] is sorted in ascending order, and print true or false.

//doubt

let arr=[1,2,9,4,5]

for(let i=0;i<arr.length-1;i++){
    if(arr[i]<arr[i+1]){
        console.log("true")
        break;
    }else{
        console.log("false")
        break;
    }
}