Quote and Book Idea Generator using Javascript

Notable features include:
* Random quotes with optional category selection
* Random book ideas with their own categories on a separate page

-Pulls random quotes using an API
```javascript
async function getQuote() {
    loading();
    const tag = categorySelect.value;
    const apiUrl = tag ? `https://api.quotable.io/random?tags=${tag}` : 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        authorText.innerText = data.author || 'Unknown';
        if (data.content.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.content;
        complete();
    } catch (error) {
        getQuote();
    }
}
```

-Able to link directly into 'composing a new tweet' with the quote currently generated
```javascript
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}
```


-Uses Loading Animation by toggling CSS class and using keyframes animation
```css
.loader {
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #333333; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  ```

