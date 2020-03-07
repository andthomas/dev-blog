---
title: 'JS Meatballs Pt. 6: Truthy, Falsey and Type Coercion 😇'
description: 'The whole truth(y)... and falsey... and type coercion. Examining the inherent boolean value each value in JavaScript has.'
date: 2019-12-06
categories: ['web', 'meatballs', 'JavaScript']
ogImage: ../og-images/meatballs.png
---

## Truthy and Falsey  
I think this point is a good time to step back from the syntax of JavaScript, and take a look into one of its quirks. As well as a type (string, number etc.), every value in JavaScript also has an inherent boolean value (true or false). We can see this by running the following:

	if ('hey') {
		return 'Party on!';
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

So why is this even a thing? Well, it allows us to write [terse](https://www.google.com/search?q=terse&oq=terse&aqs=chrome..69i57j0l5.754j0j7&sourceid=chrome&ie=UTF-8) JavaScript. Take this example for our online store.

	let itemsInStock = 0
	
	if(itemsInStock) {
		return 'Item is available';
	} else {
		return 'Item is not available';
	}
	> Item is not available'

The if statement takes the `itemsInStock` variable which has a value of 0. The conditional will then look like this `if(0)`. As we know, 0 is falsey, so the first condition evaluates to false and the `else` condition is run.

Isn't that nice? In this example it saves us from writing out `if(itemsInStock === 0)`. 

Terse AF.

## Type coercion

Sometimes in JavaScript we need to convert a value of one data type to another data type. For example, just say we get an input from an HTML form that contains a number as a string. We can use the built-in `Number()` method to explicitly convert the string into a number. We can see it convert the `age` variable below by outputting the type of the variable with the `typeof` keyword:

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


Let's take a look at this example:

    console.log("0" + 18);
    > 018

You can probably guess what is going on here. Because the first value in the equation is a string and the second is a number, JavaScript is trying to make life easier for us by *coercing* the number `18` into a string. Any data type (number, string, boolean, null, undefined or symbol) is a valid subject for type coercion. 

We can coerce a type into a boolean value using the not operator (!):

	let food = 'apple';
	!food;
	> false

We can coerce it directly into its inherent boolean value by using the not operator twice:

	let animal = 'koala';
	!!animal;
	> true