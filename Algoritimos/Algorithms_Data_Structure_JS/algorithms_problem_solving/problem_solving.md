# Algorithms and Problem Solving Patters 
## Problem solving strategies 
- Understand the problem 
- Explore concrete examples 
- Break It down 
- Solve/Simplify
- Look Back and Refactor
### Understand the problem 
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? ( You may not be able to answer this question until you set about solving the question at this early stage)
5. How should I label the important pieces of data that are a part of the problem?
### Explore concrete examples 
1. Start with Simple examples 
2. Progress to more complex examples
3. Explore examples with empty Inputs
4. Explore Examples with invalid Inputs
### Break It down 
> Take the actual steps of the problem and write them down
> *This forces you think about the code you will write before you write it, and helps you catch any lingering conceptual issue or misunderstandings before you dive in and gave to worry about details (e.g language syntax) as well*
 ### Solve/Simplify
 > Solve the problem, if you can't... solve a simpler problem :
 > Ignore the part that is giving you a rally hard time in order to focus on everything else
 1. Find the core difficulty in what you're trying to do 
 2. Temporarily ignore that difficulty
 3. Write a simplified solution
 4. Then incorporate that difficulty back in
 ### Look Back and Refactor
 #### Refactoring Questions
 - Can you check the results?
 - Can you derive the result differently?
 - Can you understand it at a glance?
 - Can you use the result or method for come other problem?
 - Can you improve the performance of your solution?
 - Can you think of other ways to refactor?
 - How have other people solved this problem?  
 ## Common problem solving patters 
 ### Frequency Counters
 This patters uses objects or sets to collect values/frequencies of values.
 This can often avoid the need for nested loops or O(n^2) operations with arrays / strings
 > Used to collect a bunch of values and their frequencies. It is useful when you have multiple pieces of data, multiple inputs, and you need to compare them to see if they consists of similar values, if they are anagrams, if a value is contained inside another value, anytime you're comparing pieces of data to inputs or more than two, and frequencies of certain things occurring.

**Example**
Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The Frequency of values must be the same.

**first approach (n²)**
```js
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } 
    for (let i = 0; i < arr1.length; i++) {
        let = correctIndex = arr2.indexOf(arr1[i]**2)
        if (correctIndex === -1){
            return false
        }
        arr2.splice (correctIndex,1)
    }
    return true
}
```
The refactored version uses 2 loops instead of a nested loop, which is better (n vs n²)
```js
function same (arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1){
        if (!(key **2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
```