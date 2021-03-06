---
title: 'JS Meatballs Pt. 5: Conditionals 🧐'
description: 'A brief look into conditionals with if, else if and else.'
date: 2019-11-05
categories: ['web', 'meatballs', 'JavaScript']
ogImage: ../og-images/meatballs.png
---

## Conditionals
Conditionals are foundational to almost all programming languages. A conditional is a function that is built into JavaScript that we use to create a rule we want the program to follow. The most common conditional is the `if()` statement.

Let's take a look:

	let numberOfApples = 1;
	
	if (numberOfApples === 1) {
		return 'Eat the apple';
	}
	
	> Eat the apple
	
The statement in the round brackets after the `if` is called the condition. If the condition evaluates to true, then the code within the curly brackets is run. In this case, the condition is `if (1 === 1) `, because the `numberOfApples` variable is set to 1. As we know, 1 is equal to 1, so the condition evaluates to true, and the `return 'Eat the apple';` is run. 

In JavaScript, we have three types of conditionals. These are `if()`, `else if()` and `else()`.

	let numberOfApples = 9;
	
	if (numberOfApples < 2) {
		return 'Eat the apple';
	} else if (numberOfApples <= 6) {
		return 'Bake apple pie';
	} else if (numberOfApples <= 8) {
		return 'Bake apple pie';
	} else {
		return 'Make apple cider';
	}
		
	> Make apple cider

In the example above, we can see a block of conditionals. The first conditional is the if statement (which we've already seen).

The second is `else if` which will run `return 'Bake apple pie';` if the first `if` condition is false, and its own condition is true. This `if else` conditional would be `else if (9 <= 6)`, which evaluates to false, so it won't run. 

Then we can see a second `else if()` statement. We can have as many `else if()` statements as we like in a block of conditionals. This `else if()` evaluates to `else if (9 <= 8)`, which is also false, so the code in its curly brackets isn't run.

Finally, we have the else. This runs if everything else in the block has failed (which is the case for our example). As such, we see `Make apple cider` is returned. Cheers!
