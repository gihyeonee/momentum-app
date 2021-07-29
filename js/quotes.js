const quotes = [
  {
    quote: "You are the salt of the earth.",
    author: "Mattew 5: 13",
  },
  {
    quote: "You are the light of the world.",
    author: "Mattew 5: 14",
  },
  {
    quote: "The essence of luck is the same as unhappiness.",
    author: "Stephen",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Anything is possible if you have enough nerve.",
    author: "J.K.Rolling",
  },
  {
    quote: "God doesn't require us to succeed. he only requires that you try.",
    author: "Mother Teresa",
  },
  {
    quote: "What makes the engine go? Desire, desire, desire.",
    author: "Stanley Kunitz",
  },
  {
    quote: "The journey is the reward.",
    author: "Steve Jobs",
  },
  {
    quote: "No pain No gain.",
    author: "Unknown",
  },
  {
    quote: "Rome was not built in a day.",
    author: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.round 는 반올림 .floor는 내림 .random은 0부터 1 사이의 숫자를 output하는 함수임.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
