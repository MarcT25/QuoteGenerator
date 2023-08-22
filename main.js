
//
async function getRandomQuote() {

    let quote = await getApiConnection();

    document.getElementById("text").innerHTML = quote.content;
    document.getElementById("author").innerHTML = quote.author;
    tweetQuote(quote.content, quote.author);
};

//function allows for quotes to be share on twitter.
function tweetQuote(quote, author){
    document.getElementById('tweet-quote').setAttribute(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + quote + '" ' + author)
      );
}

//get API function
async function getApiConnection() {
 
    try {
        let response = await fetch("https://api.quotable.io/random");
        return await response.json();
    } catch(error){
        console.log(error);
    }
}



//for when the page it's loaded this events will take place.
window.onload = function() {
    getRandomQuote();
    document.getElementById("new-quote").addEventListener('click',getRandomQuote);
}
