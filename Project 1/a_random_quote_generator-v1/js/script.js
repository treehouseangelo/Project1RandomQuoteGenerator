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
// Goal: Store 5 empty objects in the quotes Array. Use 5 properties (quote, source, citation, yeaer, image)

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

// Below your array of quote objects, use the console.log() method to log the quotes array to the console. You can click on those objects in the console to open them and inspect their contents.

// console.log(quotes)

/***
 * `getRandomQuote` function
 * The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
***/

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);  // selects a random quote
  return quotes[randomNum];  // returns the random quote
}

console.log(getRandomQuote())

/***
 * `printQuote` function
***/

// Create the printQuote function
// The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.
// You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.


function printQuote(){



  //Call the random quote.
  const quote = getRandomQuote(quotes);

  //Use the returned quote object to build a string of HTML and quote properties.
  //Then use that string to display a random quote in the browser.

  let message = '';
  if (quote.image) {
    message += `<img src="${quote.image}" alt="${quote.source}">`;
  }
  message += `<p class="quote">${quote.quote}</p>`;
  message += `<p class="source">${quote.source}`;
  if (quote.citation) {
    message += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    message += `<span class="year">${quote.year}</span>`;
  }
  message += `</p>`;
  return [
    document.querySelector('div').innerHTML = message,
    document.body.style.backgroundColor = randomRGB(randomValue)
  ] 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);