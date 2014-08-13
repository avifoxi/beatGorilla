beatGorilla
===========

DBC drum machine project proposal

## Learning Competencies

* Use form controls to pass data into a server application
* Retrieve data and manipulate it interactively in the Browser
* Use the MVC pattern in web applications with proper allocation of code and responsibilities to each layer
* Implement CRUD in an MVC application
* Use jQuery

## Summary

We're going to build a drum machine app.
It lets users create their own drum loops that will be played back in the browser. 

Loops are repeating musical structures, comprised of a specific number of Steps, occuring at specific intervals(tempo). 

The loop starts and plays through its duration. When the last Step is reached, the loop cycles back and begins again. If no one ever stops the loop - it will never stop! 
Sounds like a 'while' loop - no?

Loop playback will use a combination of pure JavaScript and AJAX to achieve the desired effects. Sounds are selected then retrieved from the server. Playback uses pure JS. 

A Loop is comprised of many Sounds. 
A Loop has a set number of Steps in its looping structure. And it has a set tempo. 

Sounds may be generated in 2 ways: they may be played from an existing Resource (mp3, wav, ogg), or from an Oscillation within the WebAudio API. 

A Sound may either play (trigger) on a Step, or not. 
A Sound may last the duration of 1 Step - or extend for several Steps. 

## Releases

### Release 0: Design
Spend a solid design period with your team developing your design and team approach.

This project will demand BOTH an involved Front End and and involved Back End. Which structure most interests you? Which do you need most work on? 
 
#### Wireframes

Create a solid set of wireframes of the pages/ states of pages of your application.  Use a tool like [Balsamiq][balsamiq] or sketch them on paper.

Discuss what your core pages are and what your core user flows are.  There should be two core flows: loop creation and loop playback.

#### User Stories
Create a solid set of user stories for your application.  Use your wireframes to guide stories (ie what happens when a user clicks here?).

You have two types of users in this application, loop creators and listeners; build stories for both.

List your user stories in Trello.  

#### MVP
Decide what your MVP will be.  Make sure you have wireframes and user stories for all parts of your MVP.

Create a repository for your project. In your repository README include
  * Team name and team members
  * A brief description of your MVP
  * A link to your team Trello board
  * A link to your wireframes
  * A brief description of your team dynamic and git workflow.


