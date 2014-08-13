# Beat Gorilla

## Learning Competencies

* Use form controls to pass data into a server application
* Use the MVC pattern in web applications with proper allocation of code and responsibilities to each layer.
* Implement CRUD in an MVC application
* Use pure JS and jQuery
* Explore the [Web Audio API]

## Summary

We're going to build a drum machine app.
It lets users create their own drum Sequences that will be played back in the browser. 

Sequences are repeating musical structures, comprised of a specific number of Steps, occuring at specific intervals(tempo). 

The Sequence starts and plays one by one through its Steps. When the last Step is reached, the Sequence cycles back and begins again. If no one ever stops the Sequence - it will never stop! 
Holy While Loop Bat Man!!!

Sequence playback will use a combination of pure JavaScript and AJAX to achieve the desired effects. Sounds are selected then retrieved from the server via Ajax. Playback uses pure JS to control the Web Audio API. 

A Sequence is comprised of many Sounds. 
A Sequence has a set number of Steps in its looping structure. And it has a set tempo. 

Sounds may be generated in 2 ways: they may be played from an existing Resource (mp3, wav, ogg), or from an Oscillation within the WebAudio API. 

A Sound may either play (trigger) on a Step, or not. 
A Sound may last the duration of 1 Step - or extend for several Steps. 

#####Disclaimer!
To do this project well - at least one person in your group will need to spike on The Web Audio API. 
[With this book.](http://chimera.labs.oreilly.com/books/1234000001552)
[And these docs.](http://webaudio.github.io/web-audio-api/)
[And this article.](http://www.html5rocks.com/en/tutorials/webaudio/intro/)
Luckily Avi is already doing this a lot, and is totally willing to share as much(little) as he knows.
BUT -- this project is pretty ambitious. If you are mostly focused on nailing down your associations and routes for the assessments, form building, and user authentication - that is ALSO intrinsic to this challenge. And if the team handles the workload well - everyone should be able to focus on the areas they feel they need to.


## Releases

### Release 0: Design
Spend a solid design period with your team developing your design and team approach.

This project will demand BOTH an involved Front End and and involved Back End. Which structure most interests you? Which do you need most work on? 
 
#### Wireframes

Create a solid set of wireframes of the pages/ states of pages of your application.  Use a tool like [Balsamiq][balsamiq] or sketch them on paper.

Discuss what your core pages are and what your core user flows are.

#### User Stories
Create a solid set of user stories for your application.  Use your wireframes to guide stories (ie what happens when a user clicks here?).

You have two types of users in this application, loop creators and listeners; build stories for both.

List your user stories in the Project Repo in a Release0 folder along with your wireframes, schema notes, and other guiding tools.

#### MVP
Decide what your MVP will be.  Make sure you have wireframes and user stories for all parts of your MVP.

Create a repository for your project. In your repository README include
  * Team name and team members
  * A brief description of your MVP
  * A link to your team Trello board
  * A link to your wireframes
  * A brief description of your team dynamic and git workflow.


###Release 1 : Models

This schema will be fairly complex. 

####Users
it will help to think in terms of sequence-creators versus sequence-listeners. (You may want to refer back to the polling challenges)

####Sequences
what is the relationship of a Sequence to its Sounds? To its Steps? Sounds are Playable in 2 different ways- how do we represent that?

Users need to be signed in to create a sequence. 
Anyone can listen to an existing sequence. 
Can users upvote sequences?

Make sure your models support all of your user stories. 

### Release 2: Sequence Creation

Users will want to create their sequences on one page.
Users add a sound to the template, and select which step of the sequence triggers the sound. 
This will most easily can be represented in a table, containing toggles for Check these out:

* [Dynamically Add Input Fields To Form Using jQuery][]
* Google "jquery dynamic form fields" to find more


To start and for your own sanity, maybe each sequence starts with a preset number and type of sounds, and preset steps. Create a version using 4 sounds that are samples, and 8 steps. 
Build out from there adding user expressiveness.

### Release 3: SEQUENCE CREATING 

looks like?
when does the sequence data get posted to the server? 
what functionality does a user need BEFORE saving a sequence to the server?

### Release 4: SEQUENCE PLAYBACK

looks like ? sounds like ?
relies on mvc js structure 

* [Boris Smus' Web Audio API Book][]
* [Web Audio API][]
* [Web Audio Controls] For an intuitive UI. 

Create a page that shows a Sequence moving stepwise through its Steps.  If
you want to do something fancy, try using [d3.js][].  This is very advanced. But maybe you like this stuff.

### Release 5: Advanced Features

####Front End

* Design 
* Visualize The UI with [Web Audio Controls]
* Front will need serious structure and MVC. Might  a front end framework like Angular be useful? Do we roll our own out of JS + jQuery? 

####Back End
* External API(s) ? - Can a Sequence Creator add their own recorded sounds to a Sequence? We would need a way to store this file if the answer is yes - but we don't want to create that functionality because someone is already doing it better than we ever could. How can we use the tools that [SoundCloud][] makes available in its [SoundCloud API][]? 
* Can an external API also handle authentication?




<!-- ## Optimize Your Learning -->

## Resources

* [Dynamically Add Input Fields To Form Using jQuery][]
* [d3.js][]
* [Flot][]
* [Highcharts][]
* [modal dialog][]

## Audio Specific
* [Boris Smus' Web Audio API Book]
* [Web Audio API]
* [Web Audio Playground App]
* [Violent Theremin!]
* [Intro to Audio Scheduling]
* [Where the cool kids hang out]


[Boris Smus' Web Audio API Book]: http://chimera.labs.oreilly.com/books/1234000001552
[Web Audio API]: http://webaudio.github.io/web-audio-api/
[Web Audio Controls]: https://github.com/cwilso/webaudio-controls
[Adding Form Fields Dynamically with jQuery]: http://www.mustbebuilt.co.uk/2012/07/27/adding-form-fields-dynamically-with-jquery/
[Dynamically Add Input Fields To Form Using jQuery]: http://www.infotuts.com/dynamically-add-input-fields-to-form-jquery/
[d3.js]: http://d3js.org/)
[Flot]: http://www.flotcharts.org/
[Highcharts]: http://www.highcharts.com/
[modal dialog]: http://www.ericmmartin.com/projects/simplemodal/
[SoundCloud]: https://soundcloud.com/
[SoundCloud API]: https://developers.soundcloud.com/
[Web Audio Playground App]: http://webaudioplayground.appspot.com/
[Violent Theremin!]: https://github.com/mdn/violent-theremin
[Intro to Audio Scheduling]: http://www.html5rocks.com/en/tutorials/audio/scheduling/
[Where the cool kids hang out]: http://webaudioapi.com/
[Pattern Sketch Drum Machine]: http://patternsketch.com/
