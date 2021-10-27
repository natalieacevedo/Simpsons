import React from "react";

function DisplayCharacter({allInformacion,quote}) {
    
    console.log(quote);
    
    return (
        <div>
            <button onClick={allInformacion}>Push me for some wisdom</button>
            <h1>{quote.character}</h1>
            <h3>{quote.quote}</h3>
            <img src={quote.image} alt= 'soy un hermoso simpson'/>
           
        </div>
    )



};

export default DisplayCharacter;