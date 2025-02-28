const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const quotes = [
    {
        quote: "The only way to do great work is to love what you do." ,
        
    },
    {
        quote: "Cheating is not a mistake it's a deliberate choice that shatters trust."  ,
        
    }

    // Add more quotes here
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = - randomQuote.author;
}

newQuoteButton.addEventListener('click', getRandomQuote);

// Initial quote
getRandomQuote();
