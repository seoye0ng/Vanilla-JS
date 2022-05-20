const quotes = [
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Sometimes even to live is an act of courage.",
    author: "Seneca",
  },
  {
    quote: "What we dwell on is who we become.",
    author: "Oprah Winfrey",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote:
      "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "The future starts today, not tomorrow.",
    author: "Saint pope John Paul II",
  },
  {
    quote: "To be happy, we must not be too concerned with others.",
    author: "Albert Camus",
  },
  {
    quote: "Life is not fair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Only i can change my life. NO one can do it for me.",
    author: "Carol Burnett",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
