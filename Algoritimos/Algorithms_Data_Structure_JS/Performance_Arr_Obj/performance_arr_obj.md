# How Objects and Arrays works though the lens of Big O

## Objects
When to use?
 - When you don't need order
 - When you need fast access / insertion and removal 

### Big O of objects
- Insertion - **O(1)**
- Removal -  **O(1)**
- Access - **O(1)**
- Searching - **O(n)**
*(searching in this case is checking to see if a given piece of information is in a value somewhere)* 
***When you don't need any ordering, obj are an excellent choice*** 

#### Big O of Objects Methods 
- Object.keys - **O(n)**
- Object.values - **O(n)**
- Object.entries - **O(n)**
- hasOwnProperty - **O(1)**

## Arrays - Ordered lists 
When to use?
- When you need order
- When you need fast access / iteration and removal (sort of...)
### Big O of Arrays
- Insertion - **It depends...**
- Removal - **It depends...**
- Searching - **O(n)**
- Access - **O(1)**

Let's see what we mean by that!

#### Insertion
It depends where  we are adding:
- to the end (push) - **O(1)**
- If I **add** or **remove** to the beginning, all the indices will need to be reorganized  - **O(n)**

#### Big O of Array Methods 
- basically push and pop - O(1); sort O(n logn); others O(n)
