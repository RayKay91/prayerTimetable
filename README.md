# Cross platform app made with Electron JS
Timetable app for a local mosque's prayer times.

This is my first true problem solving app.

**Edit:** this is deprecated, switch to the other branch. I will leave the master branch as it is to be able to compare both branches.

Master branch contains initial code structure which was to manually take data from website and put it in to a JS object. Then, using dot notation, bracket notation and optional chaining
the innerText property of the selected DOM elements would be set. 

In addition the time would be set every second using a recursive setTimeout method, notifications would be activated upon each change in prayer time, and conditional highlighting for the current prayer time would be updated.

**Update:** I found it very tedious to manually put the data in so I made another branch that web-scraped the content needed using axios to 'GET' the page, and a package called 'cheerio' to select the DOM elements from the webpage. Scraped times are then run through a function to convert them to 24 hour format. 
This project wisened me to realise that web-scraped data is finnicky and can change anytime. This is because you don't have control over the content or it's location on the page. So a simple change in the way something is written could introduce bugs.

This project taught me the importance of a scalable, clean code base, as going back to fix bugs will take much less time if everything is properly set, commented, and descriptively named from the beginning.


To download and use:

1. git clone the repo
2. run npm install
3. run npm start
