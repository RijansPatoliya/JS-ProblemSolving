// 45. Given a sentence, return the longest word in it.
// Input: "I love programming in JavaScript"
// Output: "programming"

// -------------------------TIPS--------------------------------

// Step-by-Step Execution:

// Let’s go through the loop with the example sentence "The quick brown fox jumps over the lazy dog":

// Initialization: i = 0;
// words array: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
// longestWord = ''
// First Iteration: i = 0
// words[0] is "The"
// "The".length (3) is greater than ''.length (0)
// Update longestWord to "The"
// Second Iteration: i = 1
// words[1] is "quick"
// "quick".length (5) is greater than "The".length (3)
// Update longestWord to "quick"
// Third Iteration: i = 2
// words[2] is "brown"
// "brown".length (5) is equal to "quick".length (5)
// longestWord remains "quick"
// Fourth Iteration: i = 3
// words[3] is "fox"
// "fox".length (3) is less than "quick".length (5)
// longestWord remains "quick"
// Fifth Iteration: i = 4
// words[4] is "jumps"
// "jumps".length (5) is equal to "quick".length (5)
// longestWord remains "quick"
// Continue Iterations: The loop continues similarly for the remaining words.
// End of Loop: After the loop completes, longestWord is "quick".
// Final Output

// let str="I love programming in JavaScript"
// let substr=str.split(' ')
// let longestword=''
// console.log(substr)

// for(i=0;i<str.length;i++){

//     if(substr[i]>longestword){
//         longestword=substr[i]
//     }
// }

// console.log(longestword)