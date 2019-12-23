---
title: 'JavaScript Foundations'
description: 'Explaining JavaScript to someone who has never programmed 🤠'
date: 2019-12-22
categories: ['web']
ogImage: ./og-image.png
---


I've created this guide to bring together what I believe to be the most important concepts for developing a foundational knowledge of JavaScript. It is not an exhaustive guide but is reasonably detailed. Initially you can use this to gain a high level understanding of JavaScript, then come back to it as a point of reference as you encounter JS in the wild. Please don't try and memorise everything in this guide. It's important for now that you just have a passing familiarity with the concepts here, to provided a foundation upon which you can build your own understanding of JavaScript.

I've written this with the assumption that you have some knowledge of HTML and CSS.

In this guide, code examples will look like this:

    // Here is some code
    let x = "Wassap";
    console.log(x);
    > Wassap

The coloured area is a block of code.

The `//` is how we add comments to our code in JavaScript. Comments are not run with the rest of the code and only act as notes to ourselves and other people that read our code. 

`console.log()` is a in-built JavaScript function that prints the return value of the code to the JavaScript console. A console is an environment/program that can run JavaScript. You can see a console either here on [JS Bin](https://jsbin.com/?js,console) or in the developer tools of your browser. Have a play with the console and try using `console.log()` yourself. 

The `>` sign is used to denote a line showing the return value of a function. 

Got it? Great!

Let's dig in.

## What is JavaScript?
JavaScript is a programming language that can run both in a browser and (more recently) on a server. It was written to run in the Netscape browser in 1995. JavaScript can update and change our HTML and CSS, calculate and manipulate data and request and receive data from servers or other websites. 

## Data types
Data types are a concept that are common across all programming languages. In JavaScript there are 7 primitive data types:

### 1. Strings

A string is a sequence of characters. A string literal is a sequence surrounded by either single or double quotes.

    ‘Stringy string string’ 
    “How’s ya bloody string mate”

A string literal can also be so-called template literals (introduced into JS in ES6) by using backticks.

    `Literally a template literal example`

### 2. Numbers

A number can be either a positive or negative integer or a positive or negative decimal (floating point number).

    1
    -13
    7.849
    -934.379

### 3. BigInt
Numbers can only get us so far. The largest number that JavaScript can reliably represent is 2^53. Anything larger than this we should handle with BigInt. Even so, BigInts can only be represented with arbitrary precision, meaning its precision is limited to the amount of memory that is available to our JavaScript code in our computer. 
A BigInt is created by adding an 'n' to the end of the integer.

    > 8923494n

We generally don't use JavaScript to create programs that handle large numbers. Python is a language that is better suited to this. 

### 4. Booleans
A boolean represents a value of `true` or `false`.

### 5. Null
`null` is just a special value which represents “nothing” or “empty”.

### 6. Undefined
Not to be confused with null, the meaning of `undefined` is “value is not assigned”.

### 7. Symbols
Symbols are new in the latest version of JavaScript (ES6). A symbol is a unique identifier whose value is its description. Two Symbols with the exact same description are not equal. Symbols are used when a completely unique value is needed. 
Sounds confusing? Well it bloody is and its a fairly advanced feature which we don't need to worry about right now.

    Symbol(uniqueNewYork)


## Variables and constants

A variable or constant consists of an identifier (to the left of the equals sign) and a value (to the right of the equals sign). Its value can be a primitive data type, an array, an object or a function. A variable or constant can be initialised with a value or with an undefined value.

    var newVar = "Hello, World!";
    var otherNewVar; //Initialised with an undefined value
    
### Let vs. Const. vs. Var
Pre ES6, we declared variables with the `var` keyword. With `var` we can set a variable to have some value then either manipulate it's value or assign it a new value.

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
    console.log(x);
    > 13
    
    x -= 5;
    console.log(x);
    > 8


### Comparison
Comparison operators compare two values and returns a boolean. JavaScript has two types of equals comparisons, equal `==` and strict equal `===` (threequal). Equals checks to see if the values are the same, irrespective of their types while strict equals compares value and type.

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
     
    6 !== '6'
    > false
    6 !== 6
    > false
    
We can also compare two values using the greater than `>` and less than `<` operators.

    3 > 2
    > true
    17 < 62
    > false

### Arithmetic 

In JavaScript we can perform arithmetic on numbers just like we would with a calculator. These include:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Exponents `**`
- Division `/`

Another important operator that is common in many programming languages is modulus. Modulus gives us the remainder of the divison of two numbers.

    const x = 17;
    const y = 5;
    console.log(x%y);
    > 2

We can also use increment `++` and decrement `--` to increase or decrease a number by 1.

    const x = 3;
    console.log(x++);
    > 4
    

### Logical
The logical operators are logical "OR" `||` , "AND" `&&` and "NOT" `!`. We have seen how NOT works with the comparison operators (`!==`) but AND and OR are new. We often use logical operators to determine all things or at least one thing fulfil a certain requirement. 

The AND operator needs all of the values to be true in order to return true

    console.log(true && false);
    > false
    console.log(true && true);
    > true

The OR operator needs at LEAST ONE value to be true in order to return true.

    console.log(true || false);
    > true
    console.log(false || false);
    > false

Don't worry if these concepts feel a bit abstract at the moment. You will see how this becomes useful when we start to look into Conditionals (if statements).

## Functions
A function in JavaScript is a block of code that performs a particular task. They enclose a set of statements that we can call as many times as we want. Making our code reusable and [modular](https://www.quora.com/What-is-modular-code-How-do-you-write-it). A function is executed when something invokes (calls) it. Once it's been called, it returns some value.

### Named functions
Functions can be named or nameless (anonymous functions). A named function is declared by using the `function` keyword, followed by the function's name. We then define the functions arguments between round brackets, and the logic between a couple of curly brackets.

    function greetUser(name) {
	    return "Hi there " + name + "!";
    }
    greetUser("Stanley");
	> "Hi there Stanley!"

The `return` keyword literally returns some value as a result of running the function. We can say the function above returns (or evaluates to) the string "Hi there Stanley!".

With ES6 we have these fancy new things called arrow functions `=>`. They are a more concise way of declaring a regular function.

    accountBalance = (bal) => {
	    return "Your balance is $" + bal
	}
	accountBalance(756.69);
	> "Your balance is $756.69"
	
### Anonymous functions
An anonymous function does not have a name. We can call an anonymous function where we declare it (called a self executing anonymous function), or store it in a variable and call it somewhere else. Here is an example of a self executing anonymous function.

    (function(col) {
	    return "The colour of the sky is " + col;
	})("blue");

So that's cool, but what's the point of an anonymous function? And why is it wrapped in round brackets? And what's with the argument coming after the function in it's own brackets?

To answer the first question, we generally use anonymous functions at times when we only want to call/run the function once. 

For the second question, wrapping the function in brackets allows us to parse the function as an expression. It provides the function with its own *namespace*, preventing the contents of the function to be accessible from anything outside of it. Namespacing is important because we don't want the contents of the function to collide with other functions or variables outside of the function. 

And that last question is pretty straight forward. The last brackets (parentheses) containing `("blue")` are actually how we call the function. As it's an anonymous function, we have no name to identify it by like we did with `accountBalance()` earlier, instead we have to call it where we wrote it. 

###  Namespace and Scope

In the previous section we touched on the concept of namespace, and as we discovered, its a way of isolating segments code to prevent it from clashes with other segments. This is created through the concept of *scope*. Essentially in JavaScript we have two types of scope. These are global scope and local scope. The best way to demonstrate scope is through example. 

    // Globally scoped variable
    let car = "Toyota";
    // Cannot access variable 'motorbike' from the global scope
    
	function printBike() {
		// Variable locally scoped to the printBike() function
		let motorbike = "Honda";
		// Can access variable 'car' from this local scope
		return;
	}

Scope determines the namespace of a variable, and whether or not it is visible to other parts of the code. 

As said before, this is a very important feature, especially for large applications as it prevent variables from colliding and causing bugs in our code. 

## Data structures

How's it going? Are you having fun? Probably not because this has been pretty dry so far. Again, don't feel like you have to memorise everything here or even understand it 100%. The more you are exposed to these concepts the more they will make sense and solidify in your mind. 

What I want to talk about next is some of the most important stuff in this guide. This is the concept of Arrays and Objects.

So far we have only used variables to store individual values, one at a time. But what if we want to store many values in one variable? Well it's at this point where we can reach for Arrays and Objects.

### Arrays
An array is a list of data with some special properties and methods (functions) we can use on them. We can add elements to arrays, remove elements, iterate over them to access each value and do a bunch of other stuff. This is all in the name of making our data easy to access and manipulate.

An array looks like this:

    let shoppingList = ["Apples", "Pasta", "Milk", "Bread"];

The values in an array can be any data type, a function, variable, object or even other arrays. To access a specific value of an array we can use its index. An index is just a number assigned to an element of an array. These numbers are in order and start at zero. 

    let arrayExample = ["dingo", 18, ["cat", "trolley"]];

	console.log(arrayExample[0]);
    > "dingo"
    
	console.log(arrayExample[1]);
    > 18
    
	console.log(arrayExample[2]);
    > ["cat", "trolley"]

We can update the value of an element in an array using its index too.

    let cars = ["Volvo", "Saab"];
	console.log(cars);
	> ["Volvo", "Saab"];
	
	cars[0] = "Honda";
	console.log(cars);
	> ["Honda", "Saab"];

We can even add a new element but defining a new index.

	let cars = ["Volvo", "Saab"];
	cars[2] = "Lexus";
	console.log(cars);
	> ["Honda", "Saab", "Lexus"];

Arrays also have built in properties that we can access. The most common property that we would want to access is the `length` property. Accessing the length property of the array returns the number of elements that are contained in the array as an integer.

    let cars = ["Volvo", "Saab"];
	console.log(cars.length);
	> 2

I mentioned at the start of this section that arrays also have some special methods (functions) we can use on them. We will come back to this after we've covered objects and looping. 

### Objects
Objects are the most important data type in JavaScript. They are defined by a set of key/value pairs surrounded by curly brackets. These key/value pairs are properties of the object. The keys of the properties can be strings or integers. The values in an object can be any data type, a function, variable, arrays or even other objects.

    let car = {
	    brand: "Honda",
	    color: "Red",
	    doors: 4
	};

Unlike arrays, we can access values within an object using the key associated with a specific value.

    let car = {
	    brand: "Toyota",
	    color: "Blue",
	    doors: 4
	};

    console.log(car['brand']);
    > Toyota
    console.log(car.brand);
    > Toyota

Notice how we can access the value "Toyota" either by using `car['brand']` or `car.brand`. Either way is all good, but we can use the first method if, say, we want to pass the key as a variable.

    let car = {
	    brand: "Toyota",
	    color: "Blue",
	    doors: 4
	};
	const selectedFeature = "color";
	console.log(car[selectedFeature]);
	> Blue


Objects are the most important concept in JavaScript. It is the basis upon which JavaScript is built. You may have heard JavaScript referred to as an object-oriented programming language. That's because EVERYTHING in JavaScript is an object. 

Ummmm, Ibegyafuckinpardon?!?

Yup. Strings? Objects. Numbers? Objects. Even Arrays? Yup, objects. 

Don't worry about this bit right now, it will become clearer as we explore other facets of JavaScript. 

### Object Methods

As mentioned earlier, objects can contain many types of properties. This includes functions. When a function is a property of an object we call it a *method*. We can declare and call a method on an object like this:

    let person = {  
	    firstName: "John",  
	    lastName: "Doe",  
	    id: 5566,  
	    fullName: function() {  
		    return  this.firstName + " " + this.lastName;  
	    }  
    };
    person.fullName();
    > "John Doe";

### The 'this' keyword

Hold up there cowboy, what was that 'this' shit you just threw into the last example. The 'this' keyword refers to an object, the object that is executing the current bit of JavaScript code. As we saw in the previous example, our function `fullName` needs to access the value of `firstName` and `lastName` from the object it's actually in. The 'this' refers to the `person` object, and as such we can access the values of the `person` object by calling `this.firstName` and `this.lastName`.

In JavaScript we say that `this` is a property of the *execution context*. The execution context is whatever bit of code is running at the time.

## Conditionals
Conditionals are also foundational to almost all programming languages. A conditional is a function that is built into JavaScript that we use to create a rule we want the program to follow. The most common conditional is the `if()` statement.

    let numberOfApples = 1;
    
    if (numberOfApples === 1) {
	    console.log('Eat the apple');
	}
	
	> Eat the apple
	
The statement in the round brackets after the `if` is called the condition. If the condition evaluates to true, then the code within the curly brackets is run. In this case, the condition is `if (1 === 1) `, because the `numberOfApples` variable is set to 1. As we know, 1 is equal to 1, so the condition evaluates to true, and the `console.log('Eat the apple');` is run. 

In JavaScript, we have three types of conditionals. These are `if()`, `else if()` and `else()`.
    
    
    let numberOfApples = 9;
    
    if (numberOfApples < 2) {
	    console.log('Eat the apple');
	} else if (numberOfApples <= 6) {
	    console.log('Bake apple pie');
	} else if (numberOfApples <= 8) {
	    console.log('Bake apple pie');
	} else {
	    console.log('Make apple cider');
	}
	
	> Make apple cider

In the example above, we can see a block of conditionals. The first conditional is the if statement (which we've already seen).

The second is `else if` which will run `console.log('Bake apple pie');` if the first `if` condition is false, and its own condition is true. This `if else` conditional would be `else if (9 <= 6)`, which evaluates to false, so it won't run. 

Then we can see a second `else if()` statement. We can have as many `else if()` statements as we like in a block of conditionals. This `else if()` evaluates to `else if (9 <= 8)`, which is also false, so the code in its curly brackets isn't run.

Finally, we have the else. This runs if everything else in the block has failed (which is the case for our example). As such, we see `Make apple cider` is logged to the console. Cheers!


## Truthy and Falsey  
I think this point is a good time to step back from the syntax of JavaScript, and take a look into one of its quirks. As well as a type (string, number etc.), every value in JavaScript also has an inherent boolean value (true or false). We can see this by running the following:

    if ('hey') {
	    console.log('Party on!');
	}
	> Party on! 

In the example above, 'hey' evaluates to true. We say it is *truthy*. 

The following values in JavaScript have a false boolean value or are *falsey*:

-   `false`
-   `0`  (zero)
-   `''`  or  `""`  (empty string)
-   `null`
-   `undefined`
-   `NaN`

Everything else is truthy!

So why is this even a thing? Well, it allows us to write [terse](https://www.google.com/search?q=terse&oq=terse&aqs=chrome..69i57j0l5.754j0j7&sourceid=chrome&ie=UTF-8) JavaScript. Take this example for an online store.

	let itemsInStock = 0
	
	if(itemsInStock) {
		console.log('Item is available');
	} else {
		console.log('Item is not available');
	}
	> Item is not available'

The if statement takes the `itemsInStock` variable which has a value of 0. The conditional will then look like this `if(0)`. As we know, 0 is falsey, so the first condition evaluates to false and the `else` condition is run.

Isn't that nice? In this example it saves us from writing out `if(itemsInStock === 0)`. 

Terse AF.


## Type coercion

Sometimes in JavaScript we need to convert a value of one data type to another data type. For example, just say we get an input from an HTML form that contains a number as a string. We can use the built in `Number()` method to explicitly convert the string into a number.

    let age = "23";
    console.log(age, typeof age);
    > 23 string
    
    let ageAsNumber = Number(age);
    console.log(ageAsNumber, typeof ageAsNumber);
    > 23 number
    
There are three kinds of type coercion. These are:

- Number
- String
- Boolean


Lets take a look at this example:

    console.log("0" + 18);
    > 018

You can probably guess what is going on here. Because the first value in the equation is a string and the second is a number, JavaScript is trying to make life easier for us by *coercing* the number `18` into a string. Any data type (number, string, boolean, null, undefined or symbol) is a valid subject for type coercion. 

## Loops

In the data structures section, we spoke about arrays. To recap, an array is just a list of data. Oftentimes, we want to iterate over the array, to do something to each value. For example, just say we had an array of times in minutes, but we wanted to convert it to seconds:

```
let times = [3, 5, 8, 2, 4];
```

We could access each individual time by its index and multiply it by 60 to get the result we want. That would look something like this:

```
times[0] = times[0] * 60;
times[1] = times[1] * 60;
times[2] = times[2] * 60;
// and so on
```

That isn't so bad for an array with 5 values, but breaks the principal of DRY code. In programming, DRY stands for Don't Repeat Yourself which encapsulates the goal of keeping our code succinct and readable.

So, instead of being gross and repetitve, we can use a loop to iterate over each value in the array to perform some kind of task with it.

### For loop

A for loop is a statement which iterates over an array for a given number of elements.

If we wanted to loop 5 times from the numbers zero to four we could do the following:

```
for(i = 0; i < 5; i+=1) {
    console.log(i);
}
> 0
> 1
> 2
> 3
> 4
```

So whats happening here?

On the first line we start by declaring the for statement with the `for` keyword. We then define the statement's parameters within the round brackets. We need to set three parameters, the first being, where the loop is to start. For this example we start at zero, so we set a variable called i to be equal to our starting point of zero. We then tell the loop how many times we want to loop. In this case we want to loop 5 times, so lets continue to loop for as long as i is less than 5. Finally we tell the loop how large we want our increments, which we want to be 1. 

We could also read that line as, for the variable `i` starting at zero, while i is less than 5, increment it by 1.

Going back to our previous example, to iterate over the entire times array and convert each value into seconds, we could do the following:

```
for(i = 0; i < 5; i+=1) {
    times[i] = times[i] * 60;
}
```

Because our times array has 5 elements in it, we can access each element by it's index using our `i` variable. This would look the same as:

```
times[0] = times[0] * 60;
times[1] = times[1] * 60;
times[2] = times[2] * 60;
// and so on
```

### While loop

### For Each

## Methods
### String
### Array
### Object

## Math

## Events

## DOM manipulation