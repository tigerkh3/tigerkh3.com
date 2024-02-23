## tigerkh3.com 

https://tigerkh3.com

Hello! Welcome to the README for my personal website, tigerkh3.com. Here I'll be breaking down my website's features, implementation and reasoning for it's creation. 

Before we dive in please take a look at the table of contents below and jump to whichever section you're most interested in, else feel free to go in order. 

## Table of Contents

[Introduction](#introduction)

[Application Features](#application-features)

## Introduction 

I created tigerkh3.com so that I could have my own place on the internet to do the things that I love which are building projects and writing! I had previously been posting all my content on medium.com as I developed new projects such as R2FC and the conception of the application, but considering that I had encountered countless job postings asking for a portfolio site (and I couldn't link medium.com because of the url parameters), I decided that I could make my own custom site!

I had a few things in mind when coming up with the website that would have it serve a dual purpose of both a personal blogging website and my own project portfolio. 

To find out more keep reading!

## Application Features 

When designing the application, I wanted four key features that would allow it to reach it's full potential and use for myself. I first wanted the website to serve as a portfolio site so I could show off my passion projects this required me to create a feature called project displays which would render "cards" that represented each passion project that I wanted to show off. 

The project display feature would render these "cards" that had additional information about the project such as details which would serve as a hyperlink to a new page that would display all the project's details and how it came to be. It would also include a second and third link that would send the user to a live demo website for the project and github repository respectively. 

This feature was actually initially designed as two separate components as I wanted to have a subsection on the home page for the project display as well as it's own glorious page, and as I continued to work on it I decided that I would make it a reusable component that's able to persist in two different pages simutaneously while only using half the code! Check out the actual code for more details. 

Another vital feature for my website was the journal section, it was critical that I would be able to create, insert and display my own entries into some sort of "virtual blog" that would allow for my website to serve it's second function. I thought about various was that I could go about this with the initial concept design as a series of form inputs that I could save into a database differentiated by element type such as heading, paragraph, image and etc that would represent the element that I wanted the input text rendered as. This seemed like a decent approach to it, but after coming up with the project details section in the above feature, I realized that instead of creating entries in such a round about way, I could use the same process of using markdown text to be rendered out as articles!

Project details renders each project's github readme but downloading the raw text file from GitHub, transforming the data into text, and using a markdown reader to transpile and render the text into HTML. Using the same logic from the project details, I found a dependency that allowed for users to import a simple markdown text creator that has a preview display with it. I was able to use the dependency to then create markdown text articles per my own liking with images and all the jazz and store the data into a Postgres Database! This allowed me to then again use the same code from the project details page to render my markdown text articles! (PS the actual editor is stored on a hidden endpoint only accessible to myself for security and privacy purposes but you can still see the code for the component).

The third feature that I wanted to include was an About Me section. Since this web page was going to be used to show off my projects and my blog/journal to the world, I thought it would be important to let the users know a little bit more about myself. The About Me is a simple section that include text describing some basic information about me, my interests, and my contacts/socials. 

Aside from these three major features, the minor final feature, which I probably should have started with, is the home page feature which simply shows a smaller rendition of the about me and projects section. I opted not to have the journal section on there as I would be sending out links on LinkedIn to my journal posts so I wanted to have a clean area for propsective employers to see who I am and my projects first before diving into how I think!

## Final Remarks

This wraps up the README for tigerkh3.com. You might be wondering why there's so much text and a lack of images but I would rather have you visit my website to see the product in it's full glory to see what it's all about!

