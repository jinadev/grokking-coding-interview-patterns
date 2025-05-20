# Valid Palindrome

## Problem Description
Given a string `s`, determine if it is a palindrome. A string is considered a palindrome if it reads the same backward as forward after removing all non-alphanumeric characters and converting all uppercase letters to lowercase.

### Example
#### Input:
```
s = "A man, a plan, a canal: Panama"
```

#### Output:
```
true
```

#### Explanation:
After removing non-alphanumeric characters and converting to lowercase, the string becomes `"amanaplanacanalpanama"`, which is a palindrome.

---

#### Input:
```
s = "race a car"
```

#### Output:
```
false
```

#### Explanation:
After removing non-alphanumeric characters and converting to lowercase, the string becomes `"raceacar"`, which is not a palindrome.

---

## Approach
1. **Preprocessing**: Remove all non-alphanumeric characters from the string and convert it to lowercase.
2. **Two-Pointer Technique**:
   - Use two pointers, one starting at the beginning (`left`) and the other at the end (`right`) of the string.
   - Compare the characters at the two pointers.
   - If they are not equal, return `false`.
   - Move the pointers closer to each other and repeat until they meet or cross.
3. If all characters match, return `true`.

---

## Time Complexity
- **Preprocessing**: Removing non-alphanumeric characters and converting to lowercase takes **O(n)**, where `n` is the length of the string.
- **Two-Pointer Comparison**: Each character is compared at most once, which also takes **O(n)**.
- **Overall Time Complexity**: **O(n)**.

## Space Complexity
- The space complexity is **O(1)** if the string is modified in place. However, if a new string is created during preprocessing, the space complexity is **O(n)**.