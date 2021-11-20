# Space Complexity in JS
We can use **big O** notation to analyze space complexity.
> **Auxiliary space complexity:**
> Refer to space required by the algorithm, **not including space taken up by the inputs**

## Rules of Thumb
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

#### Example 1:
```js
function sumArray (arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++){
		total += arr[i]
	}
	return total;
}
```
What do we have:

- Two numbers (total, i)

 **Thus we have constant space =  O(1) space**; It is allways the same no matter the size of the input. 

#### Example 2:
```js
function double (arr) {
	let newArr = [];
	for (let i = 0; i < arr. lengt; i++){
		newArr.push(arr[i] * 2);	
	}
	return newArr;
}
```
In this case, the the new array is getting longer and longer directly in proportion to the length of the input. Thus we have am **O(n) space**. Return newArr has *n* number 
