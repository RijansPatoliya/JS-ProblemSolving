// 30. Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately. Example : Input: 'n' = 132456, Output: 12, 9
// Explanation:
// The sum of even digits = 2 + 4 + 6 = 12
// The sum of odd digits = 1 + 3 + 5 = 9

function sumEvenOddDigits(n) {
    let evenSum = 0;
    let oddSum = 0;
    let numStr = n.toString();

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log("Sum of even digits:", evenSum); 
console.log("Sum of odd digits:", oddSum);   


}

sumEvenOddDigits(7854756454)