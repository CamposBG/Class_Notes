# Big O notation 
> A system for classifying code based on the performance.

E.g. Suppose we want to write a function that calculates the sum of all numbers from 1 to up to (and including) some number n.

I have 2 solutions:
I)
```js
 function addUpTo (n){
     let cont = 0;
     for (let i = 0; i <= n; i++){
         cont += i;
     }
     return cont;
 }
 ```
 II)
 ```js
 function addUpTo_v2 (n) {
    return n * (n + 1) / 2;
}
 ```
 
Which one is **better**?
- Faster?
- Less memory-intense?
- More readable?

For now lets focus on speed.

We can evaluate this by using built-in timing functions such as:
```js
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)/ 1000} seconds.`)
```

>In the browser **performance.now** tell me the number of milliseconds since the document was created 

In my machine I get for the 1st method 1 seconds and for the 2nd method 0.00009 seconds

### The Problem with Time
- Different machines will record different times
- The same machine will record different times
- For fast algoeithms, speed measurements may not be precise enought

Big O notation is an "better alternative" for timing our code:
>Rather than counting seconds which are so variable....

>Let's count **number of simple operations** the computer has to perform

In the **2nd** method we have 3 basic operations:
- 1 multiplication
- 1 addition
- 1 division 

And we are done.

In the **1st** method we have a + operation in a loop, so if n = 5 we have 5 operations. So we have n operations, the = assignments is also a operation that occurs n time. i++ is also an addition and an assignment. Thus we can have:
```
5.n + 2 perations
```
But tegardless of the exact number, the number of operatuins grows roughly proportionally with **n**

>Big O allow us to talk formally about how the runtume of an algorithm grows as the inputs grow. We won't care about the details, **Only the trends**

-f(n) could be linear (f(n)=n)
-f(n) could be quadratic (f(n)=n²)
-f(n) could be constant (f(n)=1)
-f(n) could be something entirely different!
>the notation  (f(n)=n) means :
a function of input of n = the output (runTime)

In our case the 2nd method has a **O(1)** operations, while the 1st method a **O(n)** operations 

#### Anoter exemple 
On this function, that print all pairs:
~~~js
function printAllPairs (n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            console.log(i,j)
        }
    }
}
printAllPairs(2)
// result: 00;01;02...22
~~~
 We have a nested loop each loop has an O(n), as they are nested this function has a O(n²). So as n grows the runtime roughlly grows at the rate of n squared 
