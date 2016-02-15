# Javascript series
This repository contains starter and final content for each of our JS-focused crash course events in Charlotte, NC. Note that this is finished code (not necessarily in the state where we finished in class), though we'll try to add comments to explain any important differences.

Notes for all sessions can be found [here](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/branches).

To learn more about the Iron Yard in Charlotte, check out [our website](http://theironyard.com/locations/charlotte/) or [get in touch with us](mailto:wes@theironyard.com).

### Follow-ups
After attending a session, you may be interested in learning more about particular topics. Each session page will include some notes and resources for learning more about some of the bigger topics that we covered. 

#### `<audio>` tag
The [`<audio>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) is new in HTML5 and finally standardizes how we can embed and play audio on web pages. Before `<audio>` was added to HTML, we had a bunch of different roundabout methods for playing audio, the most popular being Flash, but HTML5 is now the preferred method for embedding sound in most cases. 

The audio element can be either visible or invisible; by default, if there's no `controls` attribute set (`<audio controls>`) then the element will be invisible (such as what we're doing in this project). If you set the controls attribute, then a browser-specific player will be displayed that allows users to stop, play, rewind, etc the audio. There
are several other sound-related attributes such as `muted`, `preload`, and `autoplay` that specify the default content.

#### Event handlers
Events give us triggers that we can react to. For example, we can use `click` events to run certain code when a button is clicked. Events are a common mechanism throughout programming, and critical in Javascript. A really good intro to events and handlers (the code that we run when events happen) can be found [here](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers).

Audio elements provide some media-specific events that you can react to in Javascript. You can find all of the standardized elements listed [here](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events). Common events include things like `play`, `playing`, and `pause`. 