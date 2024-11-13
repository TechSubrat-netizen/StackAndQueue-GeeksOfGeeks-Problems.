// Given a stack with push(), pop(), and empty() operations, The task is to delete the middle element of it without using any additional data structure.


// Input  : Stack[] = [1, 2, 3, 4, 5]
// Output : Stack[] = [1, 2, 4, 5]
class Solution {
    // Function to delete middle element of a stack.
    deleteMid(s, sizeOfStack) {
        // code here
       const mid = Math.floor((sizeOfStack + 1) / 2) - 1;
        
        for (let idx = mid; idx < sizeOfStack; idx++) {
            s.a[idx] = s.a[idx + 1];
        }
        
        s.a.pop();
    }
}
