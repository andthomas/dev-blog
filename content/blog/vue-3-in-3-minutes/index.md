---
title: 'Vue 3 in 3 Minutes'
description: 'There are a bunch of super exciting changes to Vue in v3. In a small challenge to myself and to save you time I have attempted to distil much of the new goodness into a 3 minute blog post.'
date: 2020-06-05
categories: ['tech', 'vue', 'front-end']
ogImage: ../og-images/andy-og-image.png
---

Earlier in the year I had the amazing opportunity to attend Vuejs.Amsterdam. It was my first overseas conference and an incredible opportunity to rub shoulders with so many individuals in a community that is tiny in Australia.

Enough of that, let’s jump into what’s new in Vue 3.

## Composition API

The most significant feature change is the addition of the composition API. Similar to React hooks, it provides the developer with an alternative way to interact with the underlying Vue API.

The crux of the composition API is that it allows the developer to organise their code by logical concerns rather than component options.

The composition API seeks to address three issue with arranging components by options:

- Readability as components grow
- Current code reuse patterns have their drawbacks (mixins, scoped slots)
- Limited TypeScript support with Options API

In the code below we have two identical counters that increments a number and displays the squared total of that number. The first uses the options API and the second the composition API.
 
![A code example of the options API and the composition API](https://res.cloudinary.com/djq5ic5br/image/upload/v1606722467/blog/template.png)


Here are a few things to note:
1. The template is unchanged, the composition API only supplements the use of options on the Vue instance.
2. The options are replaced with a single `setup()` method on the component.
3. The data property is replaced by declaring a reactive reference with `ref()` which then has it's value accessed by calling the `.value` property on the reference.
4. Pure JavaScript functions replace the methods of the options API.
5. In the composition API the computed property is utilised by passing an anonymous function to the Vue 3 computed function.
6. Properties that you want to access from the template need to be returned from the `setup()` method.

The resulting flexibility of your concerns lets you rearrange your component into logical groups:

![Another code example of the options api and the composition api showing how the composition api groups all relevant code together by concerns rather than programmatic function](https://res.cloudinary.com/djq5ic5br/image/upload/v1606722469/blog/Options_API.png)

There are a few drawbacks with the composition API, however. These include:

- Return statement blowout 
- Lack of consistency in accessing ref values through the .value property
- More flexibility requires more discipline
- beforeCreate() and created() hooks are not available in composition API


## Typescript support

A common issue for Vue developers is difficulty with TypeScript support. Fortunately, Vue 3 is written in typescript and now has first class citizen support for Typescript (no additional	tooling required 😲).

## Fancy new lifecycle hooks

`onRenderTracked()`
This hook is called when a reactive dependency is first accessed in the render function

`onRenderTriggered()`
This is called when a render is triggered allowing us to inspect what dependency triggered a component to re-render.

## Portals

Portals ‘teleport’ a DOM node to a different place in your DOM tree.

This resolves the conflict between: grouping related components (keeping modals where they are called)
and ensuring the order of appearance is correct (z-index and placement in the DOM tree).

    <!-- In some nested Vue component -->
    <NestedComponent>
      <Portal target="#popup-target">
        <PopUp />
      </Portal>
    </NestedComponent>
    <!-- Before closing body tag -->
    <div id="popup-target"></div>

## Suspense
    
Suspense allows you to render fallback content until a condition is met (or a component resolved). It can be used for loading animations, placeholder content or lazy loading images. It is syntactic sugar to `v-if`.
    
    <template>
      <Suspense>
        <template #default>
          <UserProfile />
          <FunnyCats />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </template>



## V-Model

Components support multiple v-models in Vue 3.

    <LoginForm
      v-model:username="username"
      v-model:password="password"
    />
