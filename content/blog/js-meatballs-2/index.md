---
title: 'JS Meatballs Pt. 2: Variables, Constants and Operators 🚀'
description: 'Diving into declaring identifiers with let, const and var. And a look into assignment, comparison, arithmetic and logical operators.'
date: 2019-09-12
categories: ['web', 'JavaScript', 'variables', 'operators']
ogImage: ../og-images/meatballs.png
---

## Variables and Constants

A variable or constant consists of an identifier (to the left of the equals sign) and a value (to the right of the equals sign). Its value can be a primitive data type, an array, an object or a function. A variable or constant can be initialised with a value or with an undefined value.

    var newVar = "Hello, World!";
    var otherNewVar; // Initialised with an undefined value
    
### Let vs. Const. vs. Var
Prior to the latest version of JavaSctipt (ES6), we declared variables with the `var` keyword. With `var` we can set a variable to have some value then either manipulate it's value or assign it a new value.

    var greeting = "Hey there bucko";
    var greeting = "What's up dawg?";
    console.log(greeting);
    > "What's up dawg?"

ES6 introduced two new ways of declaring variables which have mostly replaced `var`. These are `const` and `let`. The keyword `const` initialises a constant, which, like a variable, is able to store the same kinds of information. However, unlike a variable, its value cannot be changed. In programming we say it is *immutable*. 

    const hey = 'ya';
    const hey = 'there';
    > Uncaught SyntaxError: Identifier 'hey' has already been declared

For now, we can safely assume `let` is the same as `var`. There is a slight difference in how it is *scoped*, a concept which we will explore in the section on functions. 

## Operators
JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.

### Assignment
As we saw before, we can assign a variable a value by using the `=` operator. This is by far the most commonly used operator. However, there are a number of assignment operators we can use in JavaScript. Two more of these operators are addition assignment `+=` and subtraction assignment `-=` which compound values while assigning them.

    let x = 3;
    x += 10;
    > 13
    
    x -= 5;
    > 8


### Comparison
Comparison operators compare two values and returns a boolean. JavaScript has two types of equals comparisons, equal `==` and strict equal `===` (or as some people say, threequals). Equal checks to see if the values are the same, irrespective of their types while strict equals compares value and type.

    10 === '10'
    > false
    10 === 10
    > true
    
    10 == '10'
    > true
    10 == 10
    > true

The not equal comparison operator `!=` and strict not equal comparison operator `!==` have the same approach to comparing types as their equals counterparts, but checks to see if values are not equal.

    6 !== 6
    > false
    6 !== '6'
    > true
    
    6 != '6'
    > false
    6 != 6
    > false
    
We can also compare two values using the greater than `>` and less than `<` operators.

    3 > 2
    > true
    10 < 5
    > false

### Arithmetic 

In JavaScript we can perform arithmetic on numbers just like we would with a calculator. These include:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Exponents `**`
- Division `/`

Another important operator that is common in many programming languages is modulus. Modulus gives us the remainder of the division of two numbers.

    const x = 17;
    const y = 5;
    x%y;
    > 2

In the example above, 17 divided by 5 is 3 with a remainder of 2. Modulus just returns the remainder value.

We can also use increment `++` and decrement `--` to increase or decrease a number by 1.

    const x = 3;
    x++;
    > 4
    

### Logical
The logical operators are logical "OR" `||` , "AND" `&&` and "NOT" `!`. We have seen how NOT works with the comparison operators (`!==`) but AND and OR are new. We often use logical operators to determine all things or at least one thing fulfil a certain requirement. 

The AND operator needs all of the values in the expression to be true in order to return true:

    true && true;
    > true

If one of the values is false, the whole expression returns false:

    true && false;
    > false

This is really handy say, for an online store. If we want to check that a customer's payment has processed and the item is in stock before shipping the item, we can do the following:

    const hasPaymentProcessed = true;
    const isItemInStock = false;
    const transactionSuccessful = hasPaymentProcessed && isItemInStock;
    console.log(transactionSuccessful);
    > false;

The OR operator needs at LEAST ONE value to be true in order to return true.

    true || false;
    > true
    false || false;
    > false

An example with the OR operator might be if we have a program that checks a roster to see if a shop can be open on a certain day.

    const isPaulAvailable = false;
    const isSarahAvailable = true;
    const canTheShopOpen = isPaulAvailable || isSarahAvailable;
    console.log(canTheShopOpen);
    > true;

Don't worry if these concepts feel a bit abstract at the moment. You will see how this becomes useful when we start to look into Conditionals (if statements).
