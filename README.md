# HIIT Timer

A HYPER ISLAND school project

Program: Frontend developer

Course: The first app

Task: To build a timer app using React. I choose to make a HIIT Timer (hi-intensity interval training) where you can set your own training time and break time and number of rounds. 

**Tech used**

React, CSS modules, SVG animations.

**The timer logic**

I experimented with a lot of different ways of creating timers, using setInterval, Date.now and requestAnimationFrame. My biggest challenge was to have two timers running simultaneuosly, plus doing the switches back and forth from Interval Time to Break Time. I choose to use setInterval, inside a useEffect hook, and counting milliseconds. The Date object is more accurate, but using it made the switches more complicated if I wanted to avoid the timers running simultaneuosly to get out of sync. 

**The layout**

I did not focus on the styling of this app. I used a mobile first approach and just added some minimal styles. Except for the progress bar circle. I used SVG animations to show the time passing. It also changes colour depending on how much time there is left on each Interval/Break.

**Accessibility**

One of the requirements of this brief was accessibility, so I used a high colour contrast between text and background colours and all the input fields and buttons are tabbable, outlined and can be interacted with using only keyboard. I audited my app in Lighthouse and Axe to make sure I followed best practice. I used semantic HTML.

**Sound**

I added sound effects to the countdown and switch time and a fanfare at the end. The sound effects were obtained from https://www.zapsplat.com.
