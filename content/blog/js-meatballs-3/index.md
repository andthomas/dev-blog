---
title: 'JS Meatballs Pt. 3: Functions 🤖'
description: 'Getting funky with functions. We take a look at performing tasks with functions, as well as the concepts of namespace and scope'
date: 2019-12-03
categories: ['web', 'meatballs', 'JavaScript']
ogImage: ../og-images/meatballs.png
---


## Functions
A function in JavaScript is a block of code that performs a particular task. They enclose a set of statements that we can call as many times as we want. Making our code reusable and [modular](https://www.quora.com/What-is-modular-code-How-do-you-write-it). A function is executed when something invokes (calls) it. Once it's been called, it returns some value.

### Named functions
Functions can be named or nameless (anonymous functions). A named function is declared by using the `function` keyword, followed by the function's name. We then define the functions arguments between round brackets, and the logic between a couple of curly brackets.

    function greetUser(name) {
	    return "Hi there " + name + "!";
    };
    greetUser("Stanley");
		> "Hi there Stanley!"

The `return` keyword literally returns some value as a result of running the function. We can say the function above returns (or evaluates to) the string "Hi there Stanley!".

With ES6 we have these fancy new things called arrow functions `=>`. They are a more concise way of declaring a regular function.

    accountBalance = (bal) => {
	    return "Your balance is $" + bal;
		};
		accountBalance(756.69);
		> "Your balance is $756.69"
		
### Anonymous functions
An anonymous function does not have a name. We can call an anonymous function where we declare it (called a self executing anonymous function), or store it in a variable and call it somewhere else. Here is an example of a self executing anonymous function.

    (function(col) {
	    return "The colour of the sky is " + col;
		})("blue");

So that's cool, but what's the point of an anonymous function? And why is it wrapped in round brackets? And what's with the argument coming after the function in it's own brackets?

To answer the first question, we generally use anonymous functions at times when we only want to call/run the function once. 

For the second question, wrapping the function in brackets allows us to parse the function as an expression (essentially returning the function so we are able to call it). It also provides the function with its own *namespace*, preventing the contents of the function to be accessible from anything outside of it. Namespacing is important because we don't want the contents of the function to collide with other functions or variables outside of the function. 

And that last question is pretty straight forward. The last brackets (parentheses) containing `("blue")` are actually how we call the function. As it's an anonymous function, we have no name to identify it by like we did with `accountBalance()` earlier, instead we have to call it where we wrote it. 

###  Namespace and Scope

In the previous section we touched on the concept of namespace, and as we discussed, its a way of isolating segments code to prevent it from clashes with other segments. This is created through the concept of *scope*. Essentially in JavaScript we have two types of scope. These are global scope and local scope. The best way to demonstrate scope is through example. 

	// The variable car is a globally scoped variable
	let car = "Toyota";
	// We can't access the variable 'motorbike' (see below) from the global scope. If we were to try and console.log it here we would get an undefined error.
	
	function printBikeAndCar() {
		// The motorbike variable is locally scoped to the printBike() function
		let motorbike = "Honda";
		// We can access variable 'car' from this local scope
		return motorbike, car;
	}

Scope determines the namespace of a variable, and whether or not it is visible to other parts of the code. 

As said before, this is a very important feature, especially for large applications as it prevents variables from colliding and causing bugs in our code. 