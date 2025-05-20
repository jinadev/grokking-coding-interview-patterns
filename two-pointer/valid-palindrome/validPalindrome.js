//Given a string, s, return TRUE if it is a palindrome; otherwise, return FALSE.

function isPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize two pointers
    let left = 0;
    let right = s.length - 1;
    
    // Check if the characters at the two pointers are equal
    while (left < right) {
        if (s[left] !== s[right]) {
        return false; // Not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // Is a palindrome
}