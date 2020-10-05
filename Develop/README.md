# Homework Number Five - building a planner.
The assignment this week, was to take the below prompt and build a planner that will alow the user to input information into their daily planner. they should be able to not just see events in the planner but it needs to be responsive as well, including the current date and time.
All of the timing elements should go off of a separate __JavScript library__ called *moment.js*.
this library will allow you to write less code and be able to access the library by simply sourcing it in your __JavScript code__. 


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
        THEN the current day is displayed at the top of the calendar
WHEN I scroll down
        THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
        THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
        THEN I can enter an event
WHEN I click the save button for that timeblock
        THEN the text for that event is saved in local storage
WHEN I refresh the page
        THEN the saved events persist
```
## creating the time element
creating the time element was fun and, seeing just how extensive the moment.js library was, Definitely opened my eyes to what can be done in future assignments by using different librarys on the internet. It is simply cool that people have taken the time to create these as a resource to help make coding elements such as the coding one much simpler.

##  styling
styling was not a huge part of the assignment since it was obviously focused on functionality, but adding little bits of css was helpful to bring the page to life instead of having it look plan. It looking more like a digital planner helped me to want to work harder to fix the bugs that I have encountered in my code during this assignment.

## Problems and bugs
The most challenging part of this assignment for me was getting the moment.js library to link up with the times that I had entered into my planner, so that it would be able to notify the user what was past due and what was coming up for that day. I think that this was meant to be the most challenging part, and I think i struggled the most figuring out how to write an array that would also fit with the set table that I already had implemented.
The array would need to be utilized so that the times could be compared as the array was being run through. Im going to go back and see if I cant manage to get it to work by (restructuring my current page).
The local storage was A second challenge since it was something that we had covered in a couple examples in class, but this was a different type of implementation. Getting the Input to be stored in the same row that it was written in had me stumped for quite a while, until I went back and went over some of the in class examples. The problem that I encountered was simply that I was writing a ton of code for things I Knew if I could figure them out would allow me to do it with much less code.
I need to go back and practice writing *Arrays* and utilizing more *JQuery* since both allow you to simplify and clean up your code.

### Screen shots 

Screenshot 1 | Screenshot 2  | Screenshot 3 | Screenshot 4
------------ | ------------- | ------------ | -------------
html code container | time clock JS | local storage | addition to css |
(Assets/images/Screen-Shot-html.jpg) | (Assets/images/Screen-Shot-timeClock.jpg.png) | (Assets/images/Screen-Shot-localStorage.jpg.png) | (Assets/images/Screen-Shot-css.jpg.png)
this is where the planner container was added | building time clock | local storage for input values | css coding for time clock and other containers.



-the first screenshot is showing the html and what was added to create the containers that will hold all of the information for the planner including data entry and scheduling buttons.

-the second screenshot shows the clock element that was added to the header and what specifications where added to the display.

-the third screenshot shows the local storage and how the data inserted is being stored and displayed on the planner when it is loaded.

- the fourth shows some of the additions to the css that I made to add some extra touches to the clock and the container of the planner.