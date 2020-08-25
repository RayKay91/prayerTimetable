# Cross platform app made with Electron JS
Timetable app for a local mosque's prayer times.

This is my first true problem solving app.

**Edit:** this version is deprecated, switch to the other branch.

Master branch contains initial code structure which was to manually take data from website and put it in to a JS object. Then, using dot notation, bracket notation and optional chaining
the innerText property of the selected DOM elements would be set. 

In addition the time would be set every second using a recursive setTimeout method, notifications would be activated upon each change in prayer time, and conditional highlighting for the current prayer time would be updated.

**Update:** I found it very tedious to manually put the data in so I made another branch that web-scraped the content needed using axios to 'GET' the page, and a package called 'cheerio' to select the DOM elements from the webpage.
