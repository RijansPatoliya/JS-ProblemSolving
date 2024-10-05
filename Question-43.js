// 43. The "Max Consecutive Ones" problem is a common algorithmic challenge that involves finding the maximum number of consecutive 1s in a binary array.
// Problem Statement Given a binary array, find the maximum number of consecutive 1s in the array.
// Example
// Input: [1, 1, 0, 1, 1, 1]
// Output: 3 (the longest sequence of 1s is 111)


//source-----> https://www.youtube.com/watch?v=pPVE4KZ1hsU


// let array=[1,1,0,1,1,1]
// let maxcount=0;
// let count=0;

// for(i=0;i<array.length;i++){

//     if(array[i]==1){
//         count++
//         if(count>maxcount){
//             maxcount=count
//         }
//     }else{
//             count=0
//         }
//     }

// console.log(maxcount)