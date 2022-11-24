import { useState } from "react";

export default function Quote(props) {

    const quoteofday = [
        {
            number: 1,
            quote: "Learning never exhausts the mind",
            author: "Leonardo da Vinci"
        },

        {
            number: 2,
            quote: "The pinnacle of perfection in simplicity",
            author: "Bruce Lee"
        },

        {
            number: 3,
            quote: "Time is the most valuable thing a man can spend",
            author: "Theophrastus"
        },

        {
            number: 4,
            quote: "It is better to do a small part of the job perfectly than to do ten times as much poorly",
            author: "Aristotle"
        },
        {
            number: 5,
            quote: "Every tear teaches mortals the truth",
            author: "Plato"
        }]

    const [quote, setQuote] = useState("");
    const getQuote = () => {
        let rand = Math.floor(Math.random() * quoteofday.length);
        setQuote(quoteofday[rand]);
    }
    const hideQuote = () => {

        document.getElementById("quote").hidden = true;
        document.getElementById("author").hidden = true;

    }
    return (

        <div key={quote.number} >
            <h1 id="quote" >{quote.quote}</h1>
            <h2 id="author">{quote.author}</h2>

            <div className="btn-container">
                <button className="btn-get" onClick={getQuote}>Get Quote</button>
                <button className="btn-get hide" onClick={hideQuote}>Hide</button>
            </div>
        </div>

    );



}
