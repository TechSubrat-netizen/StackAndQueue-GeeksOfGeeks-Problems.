// Reverse each word in a given string
// Difficulty: MediumAccuracy: 53.96%Submissions: 49K+Points: 4
// You are given a string s. You need to reverse each word in it where the words are separated by dots(.) and return the modified string.

// Examples:

// Input: s = "i.like.this.program.very.much"
// Output: "i.ekil.siht.margorp.yrev.hcum"
// Explanation: The words are reversed as follows:
// "i" -> "i","like"->"ekil",
// "this"->"siht","program" -> "margorp",
// "very" -> "yrev","much" -> "hcum".
// Input: s = "pqr.mno"
// Output: "rqp.onm"
// Explanation: The words are reversed as follows:
// "pqr" -> "rqp" ,
// "mno" -> "onm"
// Input: s = "pqr"
// Output: "rqp"
// Explanation: The words are reversed as follows:
// "pqr" -> "rqp"
// Constraints:
// 1 <= s.size() <= 105
// s can have lower and uppercase english letters
class Solution {
    reverseWords(s){
      //code here
      return s.split('.').map(word=>word.split('').reverse().join('')).join('.')
       
    
     
  }
  }