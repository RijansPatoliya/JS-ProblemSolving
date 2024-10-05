// 10. Given an array of integers, count how many numbers are even and how many are odd.
// Examplef
// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3


function check(arr) {
    let evencount = 0;
    let oddcount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evencount++;
        } else {
            oddcount++;
        }
    }
    console.log(evencount);
    console.log(oddcount);
}

let arr = [1, 2, 3, 4, 5];
check(arr);

