# Beat Gorilla

## Learning Competencies

* Use form controls to pass data into a server application
* Use the MVC pattern in web applications with proper allocation of code and responsibilities to each layer
* Implement CRUD in an MVC application
* Use pure JS and jQuery

## Summary

We're going to build a drum machine app.
It lets users create their own drum Sequences that will be played back in the browser. 

Sequences are repeating musical structures, comprised of a specific number of Steps, occuring at specific intervals(tempo). 

The Sequence starts and plays one by one throught its Steps. When the last Step is reached, the Sequence cycles back and begins again. If no one ever stops the Sequence - it will never stop! 
Sounds like a 'while' loop - no?

Sequence playback will use a combination of pure JavaScript and AJAX to achieve the desired effects. Sounds are selected then retrieved from the server via Ajax. Playback uses pure JS. 

A Sequence is comprised of many Sounds. 
A Sequence has a set number of Steps in its looping structure. And it has a set tempo. 

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
Also - standard User Authentication routes, and profile display, etc.

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

### Release 2: Survey Creation

Users will want to create their surveys in "one go" by adding multiple
questions and choices per question on a single page.  This is an opportunity to
create some fun dynamic forms.  Check these out:

* [Adding Form Fields Dynamically with jQuery][]
* [Dynamically Add Input Fields To Form Using jQuery][]
* Google "jquery dynamic form fields" to find more


To start and for your own sanity, maybe limit each survey to a single question.
Create a version with a single question per survey working first and add
support for multiple questions later.

Surveys should also have an optional image associated with them.
[CarrierWave][CarrierWave] is your friend; you'll come to love it with time.

### Release 3: SEQUENCE CREATING 

looks like?
when does the sequence data get posted to the server? 
what functionality does a user need BEFORE saving a sequence to the server?

### Release 4: SEQUENCE PLAYBACK

looks like ? sounds like ?
relies on mvc js structure 

[Boris Smus' Web Audio API Book][]
[Web Audio API][]

Create a nice page that shows a Sequence walking Stepwise through its steps.  If
you want to do something fancy, try using [d3.js][].  This is very advanced. But maybe you like this stuff.

There are other charting libraries like [Flot][] or [Highcharts][].

At the very least, create some simple HTML bar charts by having
percentage-width divs with a fixed height and solid background color so that we
can see how people responded for each question in a particular survey.

### Release 5: Advanced Features

####Front End

* Design 
* Front End JS MVC + OOJS - Angular ? 
* External API(s) ? - Can a Sequence Creator add their own recorded sounds to a Sequence? We would need a way to store this file if the answer is yes - but we don't want to create that functionality because someone is already doing it better than we ever could. How can we use the tools that [SoundCloud][] makes available in its [SoundCloud API][]? 


If you're looking for more advanced features, how about something that lets a
user view a survey without logging in but pops up a [modal dialog][] to prompt
a user to sign in/sign up right before they vote?

How about more advanced visualizations, like time series?

How about focusing on making the user interface really nice?

How about multiple question types?

<!-- ## Optimize Your Learning -->

## Resources

* [CarrierWave][]
* [Adding Form Fields Dynamically with jQuery][]
* [Dynamically Add Input Fields To Form Using jQuery][]
* [d3.js][]
* [Flot][]
* [Highcharts][]
* [modal dialog][]

[Balsamiq]: http://balsamiq.com
[CarrierWave]: https://github.com/jnicklas/carrierwave
[Adding Form Fields Dynamically with jQuery]: http://www.mustbebuilt.co.uk/2012/07/27/adding-form-fields-dynamically-with-jquery/
[Dynamically Add Input Fields To Form Using jQuery]: http://www.infotuts.com/dynamically-add-input-fields-to-form-jquery/
[d3.js]: http://d3js.org/)
[Flot]: http://www.flotcharts.org/
[Highcharts]: http://www.highcharts.com/
[modal dialog]: http://www.ericmmartin.com/projects/simplemodal/
[SoundCloud]: https://soundcloud.com/
[SoundCloud API]: https://developers.soundcloud.com/
[Boris Smus' Web Audio API Book]: http://chimera.labs.oreilly.com/books/1234000001552
[Web Audio API]: http://webaudio.github.io/web-audio-api/
