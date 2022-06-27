/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * This array contains objects to store quote information (quote, source, citation, year, tags)
***/
const quotes = [
  {
    quote: 'The good deed and the bad deed are not the same. Return evil with good.',
    source: 'Surah Fussilat, [41:34]',
    tags: ['religion', 'inspirational']
  },
  {
    quote: "I do not live in the prison of other people's opinion.",
    source: 'Dr. Umar Abdullah Johnson',
    year: 2016
  },
  {
    quote: "It's better to walk alone than with a crowd going in the wrong direction.",
    source: 'Malcom X',
    tags: ['black history']
  },
  {
    quote: "Racism is not getting worse, it's getting filmed.", 
    source: 'Will Smith',
    citation: 'The Late Show with Stephen Colbert',
    year: 2016,
    tags: ['racial justice', 'anti-racism']
  },
  {
    quote: "If now isn't a good time for the truth, I don't see when we'll get to it.",
    source: "Nikki Giovanni",
    tags: ['insightful']
  },
  {
    quote: 'It is not the eyes that are blind, but the hearts.',
    source: 'Surah Al-Haj, [22:46]',
    tags: ['religion', 'inspirational']
  },
];


/***
 * `getRandomQuote` function
 * This function uses the Math.random and Math.floor functions to get a random number between 0 and the length of the quotes array.
 * It then returns the quote object at the index of the random number.
***/
function getRandomQuote(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};


/*
  * `updateBackgroundColor` function
  * This function uses the Math.floor() and Math.random() functions to get random numbers between 0 and 256.
  * It uses the random numbers to create a color code to change the background color to.
*/

function updateBackgroundColor() {

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  document.getElementById('main').style.backgroundColor = randomColor;
};

/***
 * `printQuote` function
 * This function first calls the updateBackgroundColor function to change the background color.
 * It then calls the getRandomQuote function.
 * Then it creates an HTML string to display the random quote on the web page.
 * The if statements check if the quote object has a citation, year,  and/or tags property to add to the HTML string.
***/
function printQuote() {
  updateBackgroundColor();
  const quote = getRandomQuote(quotes);

  let html = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}
    `;

  if ( quote.citation ) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if ( quote.year ) {
    html += `<span class="year">${quote.year}</span>`;
  }    
  if ( quote.tags ) {
    html += `<span class="tags">, [${quote.tags.join(', ')}]</span>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
};

/*
  * `timing` function
  * This function uses the setInterval() method to call the printQuote() function every 10 seconds.
  * This is so that a new quote gets printed to te page every 10 seconds.
*/

function timing() {
  setInterval(printQuote, 5000);
};

timing()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);