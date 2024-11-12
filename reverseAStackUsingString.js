// Reverse a string using Stack
// Difficulty: EasyAccuracy: 76.17%Submissions: 100K+Points: 2
// You are given a string S, the task is to reverse the string using stack.

 

// Example 1:


// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG
 

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function reverse() which takes the string S as an input parameter and returns the reversed string.

 

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

 

// Constraints:
// 1 ≤ length of the string ≤ 100

 

class Solution {
    
    reverse(S){
       //code here
       let stack=[]
       for(let i=0;i<S.length;i++){
           stack.unshift(S[i])
       }
       return stack.join('')
    }
}