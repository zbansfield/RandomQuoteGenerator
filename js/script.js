/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * This array contains objects to store quote information (quote, source, citation, year)
***/
const quotes = [
  {
    quote: 'The good deed and the bad deed are not the same. Return evil with good.',
    source: 'Surah Fussilat, [41:34]'
  },
  {
    quote: "I do not live in the prison of other people's opinion.",
    source: 'Dr. Umar Abdullah Johnson',
    year: '2016'
  },
  {
    quote: "It's better to walk alone than with a crowd going in the wrong direction.",
    source: 'Malcom X'
  },
  {
    quote: "Racism is not getting worse, it's getting filmed.", 
    source: 'Will Smith',
    citation: 'The Late Show with Stephen Colbert',
    year: 2016
  },
  {
    quote: "If now isn't a good time for the truth, I don't see when we'll get to it.",
    source: "Nikki Giovanni"
  },
  {
    quote: 'It is not the eyes that are blind, but the hearts.',
    source: 'Surah Al-Haj, [22:46]'
  },
];


/***
 * `getRandomQuote` function
 * This function uses the Math.random and Math.floor functions to get a random number between 0 and the length of the quotes array.
 * It then returns the quote object at the index of the random number
***/
function getRandomQuote(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

/***
 * `printQuote` function
 * This function calls the getRandomQuote function 
 * It then creates an HTML string to display the quote on the web page.
 * The if loops check if the quote object has a citation and/or year property to add to the HTML string.
***/
function printQuote() {
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
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);