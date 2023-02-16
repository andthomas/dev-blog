---
title: "The ~~four~~ three horsemen of the of PR apocalypse 🐎"
description: 'In this post I talk about the three kinds of bad PR reviews and what can be done to combat them'
date: 2023-01-10
categories: ['pr', 'reviews']
ogImage: ../og-images/andy-og-image.png
---

Over my time working in web development I’ve had a number of PR reviews (or MR reviews if you’re a complete psychopath) some of which were brilliant and others not as good. This post focuses on the latter of that group. The quality of review does not only depend on the individual but also on whether that individual is burnt out, buzzed on caffeine, just back from holiday, new to the company etc. 

We’ve all given at least one of these reviews in our careers, myself included. We all have our off-days and they serve as a great opportunity to learn from and have a chuckle at.

## “Sign and Recline”

These reviews often don’t involve a lot of reading, or at least much in depth reading. This can happen with large PRs that have a significant cognitive overload. Overall, the sign and reclines are fantastic at quickly shipping code as well as being accessories to production outages. 

If you sense you’re about to pop out one of these reviews, it might be better asking the author to break the PR down into more digestible pieces. As an author, we need to be proactive in keeping our PRs terse and readable to prevent any bugs from entering the codebase. It’s far easier to understand what is going on in 20 lines than 200.

## “All fart no poo”

It takes approximately 65,000 cubic feet of hot air to float a hot air balloon. A similar amount is often produced by these reviews on the smallest of PRs. These reviews involve a significant amount of chat (mostly ![bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality)) often because the reviewer isn’t particularly comfortable in that area of the codebase. The main issue with these reviews is that the result be a PR that hangs around for days or even weeks without an approval.

As a reviewer going down this path, it is good to keep in mind that one of the primary goals of a reviewer is to get the author unblocked. Unblocking may not always mean an approval, but does mean pragmatic action. If you lack the confidence to click approve, tag someone who does have the knowledge in that area. If that’s not possible, maybe getting a walkthrough from the author will help. The worst thing you can do is ghost the author. Leaving comments without the intention of serving to unblock provides only the illusion of progress, leading other potential reviewers to focus their energies elsewhere. 

## “The token comment”

These reviews (often given at 4:30 on a Friday) are defined by a single vague comment whose significant capacity for interpretation leaves the author completely stumped. These directionless reviews often refer to larger problems that need to be addressed by more significant refactors. All the while, the actual content of the changes being made aren’t being considered.

This is another style of review that only gives the illusion of progress. The scope of a PR is important to be mindful of in a review. If it’s not in scope, either ensure that your comment marked as “non-blocking”, or strike up a conversation about the issue elsewhere. If it’s 5pm and you’re typing out a comment for the sake of it, log out and head on home. 

Finally, some thoughts on what makes a great review:
1. Clear communication (What is actionable? What matters? What is a personal preference? See ![conventional comments](https://conventionalcomments.org/))
2. Timely responses (Set up good quality notifications for when changes to the PR have been made. Slack > Email)
3. Run the code.
