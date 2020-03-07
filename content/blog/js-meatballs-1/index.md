---
title: 'JS Meatballs Pt. 1: Introduction and Data Types 🍝'
description: 'Introducing meatballs, a collection of small but meaty posts on the foundations of JavaScript. Also, we look at the 7 hottest primitive data types for JavaScript in 2020.'
date: 2019-09-01
categories: ['web', 'JavaScript']
ogImage: ../og-images/meatballs.png
---

Welcome to JavaScript Meatballs! A collection of small but meaty posts on the foundations of JavaScript.

I've created this series of posts to bring together some of the more important concepts when developing a foundational knowledge of JavaScript. It is not an exhaustive guide but is reasonably detailed. 

I started writing this guide while working as a Teachers Assistant for a part-time web dev course, and is very much intended as a companion to learning the fundamentals of JavaScript.

In this guide, code examples will look like this:

    // Here is some code
    let x = "Wassap";
    console.log(x);
    > Wassap

The coloured area is a block of code.

The `//` is how we add comments to our code in JavaScript. Comments are not run with the rest of the code and only act as notes to ourselves and other people that read our code. 

`console.log()` is an in-built JavaScript function that prints the return value of the code to the JavaScript console. A console is an environment/program that can run JavaScript. You can see a console either here on [JS Bin](https://jsbin.com/?js,console) or in the developer tools of your browser.

The `>` sign is the return value of a function. When we run a function in JavaScript, it will always return some data/value/function for us.

We dont need to worry about the other stuff that's there right now.

Got it? Great!

## What is JavaScript?
JavaScript is a programming language that can run both in a browser and (more recently) on a server. It was written for the Netscape browser in 1995. JavaScript can update and change our HTML and CSS, calculate and manipulate data and request and receive data from servers or other websites. 

The latest version of JavaScript (ES6) has brought some really cool enhancements to the language, some of which we'll look into over these posts.

## Data types
Data types are a concept that are common across all programming languages. In JavaScript there are 7 data types (also known as primitive data types):

### 1. Strings

A string is a sequence of characters. They are often used to denote words or sentences. A string literal is a sequence surrounded by either single or double quotes.

    ‘Stringy string string’ 
    “How’s ya bloody string mate”

A string literal can also be so-called template literals (introduced into JavaScript in ES6) by using backticks.

    `Literally a template literal example`

### 2. Numbers

A number can be either a positive or negative integer (whole number) or a positive or negative decimal (also known as a floating point number).

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
Sounds confusing? Well it bloody is and it's a fairly advanced feature which we don't need to worry about right now.

    Symbol(uniqueNewYork)
