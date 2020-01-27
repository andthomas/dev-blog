---
title: 'JS Meatballs Pt. 7: Loops'
description: 'Loop da loop'
date: 2019-12-07
categories: ['web', 'meatballs', 'JavaScript']
ogImage: ../og-images/meatballs.png
---

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
