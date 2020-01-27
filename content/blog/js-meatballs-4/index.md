---
title: 'JS Meatballs Pt. 4: Data Structures (Arrays and Objects) 🤠'
description: 'In this post, we dive into the two most common ways in which we structure data in JavaScript with Arrays and Objects.'
date: 2019-10-09
categories: ['web', 'meatballs', 'JavaScript']
ogImage: ../og-images/meatballs.png
---

## Data structures

How's it going? Are you having fun? Probably not because this has been pretty dry so far. Again, don't feel like you have to memorise everything here or even understand it 100%. The more you are exposed to these concepts in the wild the more they will make sense and solidify in your mind. 

What I want to talk about next is some of the most important stuff in this series. These are the concepts of Arrays and Objects.

So far we have only used variables or constants to store individual values, one at a time. But what if we want to store many values in one variable? Well it's at this point where we can reach for Arrays and Objects.

### Arrays
An array is a list of data with some special properties and methods (functions) built into them. We can add elements to arrays, remove elements, iterate over them to access each value and do a bunch of other stuff. This is all in the name of making our data easy to access and manipulate.

An array looks like this:

    let shoppingList = ["Apples", "Pasta", "Milk", "Bread"];

The values in an array can be any data type, a function, variable, object or even other arrays. To access a specific value of an array we can use its index. An index is just a number assigned to an element of an array. These numbers are in order and start at zero. We use square brackets and the index of the item in the array to access the value we want.

	let arrayExample = ["dingo", 18, ["cat", "trolley"]];

	arrayExample[0];
    > "dingo"
    
	arrayExample[1];
    > 18
    
	arrayExample[2];
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