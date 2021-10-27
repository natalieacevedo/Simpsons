
import './App.css';
import React from "react";
import axios from 'axios';
import DisplayCharacter from './DisplayCharacter';
//import DisplayCharacter from './DisplayCharacter';



function App() {

  
  const [quote, setQuote] = React.useState("Get your Simpson's daily wisdom dose");

  function getApi() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        //console.log(response)
        return response.data[0]
      })
      .then((data) => {
       
      // console.log(data)
        //setQuote(data.quote)
        setQuote(data);
       
      });
  
  };

  return (
    <div className="App">
      <h1>The Simpsons</h1>
      <DisplayCharacter allInformacion={getApi} quote={quote}/>
    </div>
  );
}






  

  
  // const getEmployee = () => {
  //   // Send the request
  //   axios
  //     .get('https://randomuser.me/api?nat=en')
  //     // Extract the DATA from the received response
  //     .then((response) => response.data)
  //     // Use this data to update the state
  //     .then((data) => {
  //       setEmployee(data.results[0]);
  //     });
  // };


  


 

export default App;
