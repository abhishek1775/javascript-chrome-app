const quotes = [
    {
        quote: "무릇 그리스도 예수 안에서 경건하게 살고자 하는 자는 핍박을 받으리라",
        author: "디모데후서 3:12",
    },
    {
        quote: "의로운 자에게는 재난이 많아도, 여호와는 그 모든 것에서 그를 구출하신다",
        author: "시편 34:19",
    },
    {
        quote: "나는 숨이 끊어질 때까지 내 충절을 버리지 않으리!",
        author: "욥기 27:5",
    },
    {
        quote: "여호와 하나님은 우리가 죽을 때까지 우리를 인도하시리라",
        author: "시편 48:14",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
