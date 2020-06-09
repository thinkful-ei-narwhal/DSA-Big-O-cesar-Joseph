'use strict';
// 1. What is the Big O for this?
// 	1.Constant time O(1)
// 	2.linear O(n)

// 2. Even or odd
// 	A:Constant time O(1) because no matter the input the run time will be the same

// 3. Are you here?
// 	A: Polynomial time O(n^k) because theres a nested for loop

// 4. Doubler
// 	A:linear O(n) because its a single for loops that time icrease linearly as the array length increases

// 5. Naive search
// 	A:Linear Time  because its a single for loops that time icrease linearly as the array length increases

// 6. Creating pairs:
// 	A: Polynomial time O(n^k) because theres a nested for loop

// 7. Compute the sequence
// 	A:the equation is given a number and it outputs a sequence of numbers (the fibinachi sequence) up to the place of the input. linear O(n)

// 8. An efficient search
// 	A:Logarithmic time O(log(n)) because it doesnt go through all of the array. it searches in pieces for what its looking for.

// 9. Random element
// 	A:Constant time O(1) because no matter the input the run time will be the same

// 10. What Am I?
// 	A: The algorithm is checking if the numbers is an odd number. Exponential time O(2^n)

// 11. Tower of Hanoi
// 	A:


// function TOH (n,A,C,B){
//   if (n===1){
//     print(A,C);
//   }
//   TOH(n-1,A,B,C);
// }

// function print(A,B){
//   console.log(`${A}->${B}`);
// }

// TOH(1,'A','B','C');