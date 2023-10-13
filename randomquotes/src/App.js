import React, { useState } from "react";
import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js";
import Quotes from "./components/quote.js";


const App = ()=>{
    const buttons = document.querySelectorAll('button');

const quotes = [{
    quote:"'The purpose of our lives is to be happy.'" ,
    author:"Dalai Lama"
},
{
    quote:"Life is what happens when you're busy making other plans.",
    author:"John Lennon"
},
{
    quote:"Get busy living or get busy dying.",
    author:"Stephen King"
},{
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
},
{
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison"
},
{
    quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
    author:"Albert Einstein"
},
{
    quote:"Never let the fear of striking out keep you from playing the game.",
    author:"Babe Ruth"
},
{
    quote:"Money and success don’t change people; they merely amplify what is already there.",
    author:"Will Smith"
},{
    quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author:"Steve Jobs"
},{
    quote:"Not how long, but how well you have lived is the main thing.",
    author:"Seneca"
},]

const [i,setI] = useState(0)
window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click',()=>{
        if(i != 0){
        const a = i;
        setI(a)
        }
        let prev = Math.floor(Math.random()*quotes.length);
        setI(prev);
    })
    buttons[1].addEventListener('click',()=>{
        let next = Math.floor(Math.random()*quotes.length);
        setI(next)
    })
});
    return(
        <div className="app">
            <Navbar/>
            <Quotes x={quotes[i].quote} y={quotes[i].author}/>{i}
            <Footer/>
        </div>
    );
}


export default App;