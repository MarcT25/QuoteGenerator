function getRandomQuote() {
    const quotes = [
        {
            id: 1,
            quote:"Keep true to the dreams of thy youth.",
            author: "Friedrich von Schiller"
        },

        {
            id: 2,
            quote:"Success is getting what you want. Happiness is wanting what you get.",
            author: "Dale Carnegie"
        },

        {
            id: 3,
            quote:"Nature takes away any faculty that is not used.",
            author: "William R. Inge"
        },

        {
            id: 4,
            quote:"Experience keeps a dear school, but fools will learn in no other.",
            author: "Benjamin Franklin"
        },

        {
            id: 5,
            quote:"Good luck is another name for tenacity of purpose.",
            author: "Ralph Emerson"
        },

        {
            id: 6,
            quote:"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
            author: "Nikola Tesla"
        },

        {
            id: 7,
            quote:"The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
            author: "Daisaku Ikeda"
        },

        {
            id: 8,
            quote:"Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you'll never get back.",
            author: "Annonymus"
        },

        {
            id: 9,
            quote:"The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
            author: "Thomas Edison"
        },

        {
            id: 10,
            quote:"When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
            author: "Audre Lorde"
        },

        {
            id: 11,
            quote:"Well begun is half done.",
            author: "Aristotle"
        },

        {
            id: 12,
            quote:"Each day provides its own gifts.",
            author: "Marcus Aurelius"
        },

        {
            id: 13,
            quote:"At the center of your being you have the answer; you know who you are and you know what you want.",
            author: "Lao Tzu"
        },

        {
            id: 14,
            quote:"To be wronged is nothing unless you continue to remember it.",
            author: "Confucius"
        },

        {
            id: 15,
            quote:"Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
            author: "Ralph Marston"
        }
    ];

    var randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    document.getElementById("text").innerHTML = randomQuote.quote;
    document.getElementById("author").innerHTML = randomQuote.author;
};

//for when the page it's loaded this events will take place.
window.onload = function() {
    getRandomQuote();
    document.getElementById("new-quote").addEventListener('click',getRandomQuote);
}
