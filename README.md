# A HYPER ISLAND school project

Program: Frontend developer

Course: The first app

Task: To build a timer app using React. I choose to make a HIIT Timer (hi-intensity interval training) where you can set your own training time and break time and number of rounds. 

**Tech used**

React, CSS modules, SVG animations.

**The timer logic**

I experimented with a lot of different ways of creating timers, using setInterval, Date.now and requestAnimationFrame. My biggest challenge was to have two timers running simultaneuosly, within the same time counter, plus doing the switches back and forth from Interval Time to Break Time whilst not getting out of sync with the timer counting the Total Time. I choose to use setInterval only, inside a useEffect hook, and counting milliseconds.

**The layout**

I styled the app using a mobile first approach. To show the time passing I built a progress bar circle using SVG animations that also changes colour depending on how much time left on each Interval/Break.

**Accessibility**

I used a high colour contrast between text and background colours and all the input fields and buttons are tabbable, outlined and can be interacted with using only keyboard. I audited my app in Lighthouse and Axe to make sure I followed best practice. I used semantic HTML.

**Sound**

I added sound effects to the countdown and switch time and a fanfare at the end. The sound effects were obtained from https://www.zapsplat.com.
