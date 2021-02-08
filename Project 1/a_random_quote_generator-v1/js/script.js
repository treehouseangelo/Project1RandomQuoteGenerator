/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Create an Array of objects to store the data for your quotes

let quotes = [
  {
    quote: `A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, 
    those are the sacrifices that you have to make if you want to be an NBA basketball player.`,
    source: `Jason Kidd`,
    citation: `New Jersey Nets`,
    year: 2007,
    image: `NULL`
  },
  {
    quote: `A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, 
    those are the sacrifices that you have to make if you want to be an NBA basketball player.`,
    source: `Jason Kidd`,
    citation: `New Jersey Nets`,
    year: 2007,
    image: `NULL`
  },
  {
    quote: `Ask not what your teammates can do for you. Ask what you can do for your teammates.`,
    source: `Magic Johnson`,
    citation: `Los Angeles Lakers`,
    year: 1987,
    image: `NULL`
  },
  {
    quote: `Everybody pulls for David, nobody roots for Goliath.`,
    source: `Wilt Chamberlain`,
    citation: `Golden State Warriors`,
    year: 1965,
    image: `NULL`
  },
  {
    quote: `If you are afraid of failure you don't deserve to be successful!`,
    source: `Charles Barkley`,
    citation: `Phoenix Suns`,
    year: 1995,
    image: `NULL`
  },


];

console.log(quotes)

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);