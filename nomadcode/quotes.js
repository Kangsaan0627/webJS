const quotes = [
{
  quote: "They must often change who would be constant in happiness or wisdom"
    ,author:"공자"
},
{
    quote : "Youth isn’t always all it’s touted to be."
    ,author: "Lawana Blackwell"
},
{
    quote: "You will face many defeats in life, but never let yourself be defeated. "
    ,author: "Maya"
},
{
    quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller"
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall",
    author:"Nelson Mandela"
},
{
    quote:"The goal of life is living in agreement with nature.",
    author:"Zeno"
},
{
    quote:"This too shall pass",
    author:"Et hoc transibit"
},
{
    quote:"The die is cast",
    author:"Julius caesar"
},
{
    quote:"Only I can change me life, no one can do it for me. ",
    author:"Carol Burnett"
},
{
    quote:" Life is unfair, get used to it.",
    author:"Bill Gates"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQutoe = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQutoe.quote;
author.innerText = todaysQutoe.author;