import React from "react";


const Quotes = ({x,y})=>{
    console.log(x,y);
    return(
        <div className="quote">
            <p>{x}</p>
            <p>-{y}</p>
        </div>
    );
}

export default Quotes;