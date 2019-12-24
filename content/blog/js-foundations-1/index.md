---
title: 'JS Meatballs Part 1: Introduction and Data Types'
description: 'Getting this show on the road'
date: 2019-12-01
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

We dont need to worry about the other stuff that's there right now.

Got it? Great!

Let's dig in.

## What is JavaScript?
JavaScript is a programming language that can run both in a browser and (more recently) on a server. It was written to run in the Netscape browser in 1995. JavaScript can update and change our HTML and CSS, calculate and manipulate data and request and receive data from servers or other websites. 

The latest version of JavaScript (ES6) has brought some really cool enhancements to the language, some of which we'll look into over these posts.

## Data types
Data types are a concept that are common across all programming languages. In JavaScript there are 7 data types (also known as primitive data types):

### 1. Strings

A string is a sequence of characters. They are often used to denote words or sentences. A string literal is a sequence surrounded by either single or double quotes.

    ‘Stringy string string’ 
    “How’s ya bloody string mate”

A string literal can also be so-called template literals (introduced into JS in ES6) by using backticks.

    `Literally a template literal example`

### 2. Numbers

A number can be either a positive or negative integer or a positive or negative decimal (also known as a floating point number).

    1
    -13
    7.849
    -934.379

### 3. BigInt
Numbers can only get us so far. The largest number that JavaScript can reliably represent is 2^53. Anything larger than this we should handle with BigInt. Even so, BigInts can only be represented with arbitrary precision, meaning its precision is limited to the amount of memory that is available to our JavaScript code in our computer. 
A BigInt is created by adding an 'n' to the end of the integer.

    > 8923494n

We generally don't use JavaScript to create programs that handle large numbers. A language like Python is better suited to this. 

### 4. Booleans
A boolean represents a value of `true` or `false`.

### 5. Null
`null` is a special value which represents “nothing” or “empty”.

### 6. Undefined
Not to be confused with null, the meaning of `undefined` is “value is not assigned”.

### 7. Symbols
Symbols are new in the latest version of JavaScript (ES6). A symbol is a unique identifier whose value is its description. Two Symbols with the exact same description are not equal. Symbols are used when a completely unique value is needed. 
Sounds confusing? Well it bloody is and its a fairly advanced feature which we don't need to worry about right now.

    Symbol(uniqueNewYork)

