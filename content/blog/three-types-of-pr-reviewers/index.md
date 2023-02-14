---
title: 'The three types of PR reviewers ✔'
description: 'In my opinion, PR reviewers broadly fall into three camps. Here we'll take a quick look at each'
date: 2023-02-10
categories: ['pr', 'mr', 'reviews']
ogImage: ../og-images/andy-og-image.png
---

Over my five-ish years of web development I’ve had a number of PR (or MR if you’re a complete psychopath) reviewers, some of whom were brilliant and others not so good. Broadly speaking I can say that reviewers fall into three categories. 

## “Sign and Recline”

“Sign and recline, that’s my motto” Jez says to Mark as he mulls over the new parental contract Sophie has sent him. Why bother thinking about it when you can… not. 

These reviewers aren’t big readers and sometimes its not entirely their fault. Large PRs with a significant cognitive overload lend themselves to the “Ah screw it, I’ll tick it” solution. These reviewers may have a foot out of the door of the company, or are enthusiastic juniors who are keen to help out in any way they can. Overall the sign and recliners are fantastic at quickly shipping code and being accessories to production outages. 

## “All fart no poo”

It takes approximately 65,000 cubic feet of hot air to float a hot air balloon. A similar amount is often produced by this crowd when reviewing your 20 line PR. These reviewers can sometimes be new to the company (and don’t yet have the confidence in their domain knowledge to click approve) or they’ve just never really gotten around to reading he codebase. They are by far the most annoying reviewer as their innocuous comments will leave your PR hanging around like a bad smell for days. Comments are often subjective or could be answered by reading some of the context or even running the code. The cherry on all of this is once all of the comments are sufficiently answered they vanish into thin air, leaving you completely hanging on that approval.

But fear not, because this is when you reach out to:

## “Stephen Pham” 

Everyone knows a Stephen Pham. They are clever, pragmatic, responsive, don’t act like they know everything but teach you so much. When it comes time to review a PR their primary concern is getting you unblocked. Any blocking comments will pertain to possible production or readability issues, while larger refactors can be addressed in subsequent PRs. Once you’ve addressed their comments, they quickly check any updates you’ve pushed and hit approve. You sleep soundly knowing that they’ve actually run the code and that the monitors they setup for the codebase will notify you of any unhandled errors.
