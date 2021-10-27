import React from "react";

function DisplayCharacter({allInformacion,quote}) {
    
    // React.useEffect(() => {
    //     console.log(`Youhou you clicked`);

       
    //   }, []);
    
    
    console.log(quote);
    




    return (
        <div>
            <h1>{quote.character}</h1>
            <h3>{quote.quote}</h3>
            <img src={quote.image} alt= 'soy un hermoso simpson'/>
            <button onClick={allInformacion}>Push me for some wisdom</button>
        </div>
    )



};

export default DisplayCharacter;