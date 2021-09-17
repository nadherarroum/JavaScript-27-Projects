var arrayOfQuotes = [
    {
        "quote":"The purpose of our lives is to be happy.",
        "author":"Dalai Lama"
    },
    {
        "quote":"Life is what happens when you’re busy making other plans.",
        "author":"John Lennon"
    },
    {
        "quote":"Get busy living or get busy dying.",
        "author":"Stephen King"
    },
    {
        "quote":"You only live once, but if you do it right, once is enough.",
        "author":"Mae West"
    },
    {
        "quote":"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        "author":"homas A. Edison"
    },

    {
        "quote":"If you want to live a happy life, tie it to a goal, not to people or things.",
        "author":"Albert Einstein"
    },
    {
        "quote":"Never let the fear of striking out keep you from playing the game.",
        "author":"Babe Ruth"
    },
    {
        "quote":"Money and success don’t change people; they merely amplify what is already there.",
        "author":" Will Smith"
    },
    {
        "quote":"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        "author":" Steve Jobs"
    },
    {
        "quote":"Not how long, but how well you have lived is the main thing.",
        "author":" Seneca"
    },
    {
        "quote":"If life were predictable it would cease to be life, and be without flavor.",
        "author":" Eleanor Roosevelt"
    },
    {
        "quote":"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        "author":"Henry Ford"
    }
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNbr = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML    = '“'+arrayOfQuotes[randomNbr].quote + '”';
    document.getElementById("authorOutput").innerHTML   = '-'+arrayOfQuotes[randomNbr].author;
}