const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const categorySelect = document.getElementById('quote-category');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quote From API
async function getQuote() {
    loading();
    const tag = categorySelect ? categorySelect.value : '';
    const apiUrl = tag ? `https://api.quotable.io/random?tags=${tag}` : 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const author = data.author || 'Unknown';
        authorText.innerText = author;
        // Reduce Font Size for Long Quotes
        if (data.content.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.content;
        // Stop Loader, Show Quote
        complete();
    } catch (error) {
        getQuote();
    }
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
if (categorySelect) {
    categorySelect.addEventListener('change', getQuote);
}

// On Load
getQuote();
loading();