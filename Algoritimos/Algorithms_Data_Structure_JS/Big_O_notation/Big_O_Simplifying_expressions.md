# Simplifying Big O expressions 
We do simplify 5n+2 just n. As the input grows the runtime grows proportionally with n.

## Some rules for simplifying Big O expressions 
Constants Don't Matter 

| Original | simplified |
|-|-|
|  O(2n) | O(n) |
|  O(500) | O(1) |
|  O(50n²) | O(n²) |

Smaller Terms Don't Matter
| Original | simplified |
|-|-|
|  O(n + 10) | O(n) |
|  O(1000n + 50) | O(n) |
|  O(n² + 5n + 1000) | O(n²) |

### Big O Shorthands 
1. Arithmetic operations are constant  (1+1) ~ (1000+1000)
2. Variable assignment is constant x = 1 ~ x= 1000000
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a Loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
