  
import './App.css';

import  Header from './components/Header/header'
import Meme from './components/Meme/meme'
function App() {
  return (
    <div>
 <Header/>
   <Meme/>
  
    </div>
   
  );}


export default App;


 



// event ;listerners

// this is how we wil usually do in in react


// return (
//   <div className="container">
//       <img src="https://picsum.photos/640/360" />
// we can put the event listener right inside th ebutton wiht a function but scrimba says thats not the prefered waY
// THE PREFERED WAY IS TO PUT ANOTHER FUNTION ON THE TOP BUT STILL INSIDE THE COMPONENT 
//       <button onClick={function(){}}>Click me</button>
//   </div>
// )
// }

// prefered way to do event listener in react is like this-- see below 

///export default function App() {
  //function handleClick(){
    //console.log("I was clicked!")
 // }
//   return (
//       <div className="container">
//           <img src="https://picsum.photos/640/360" />

// got rid of function inside of button
//           <button>Click me</button>
//       </div>
//   )
// }


    
//   return (
//       <div className="container">
//           <img src="https://picsum.photos/640/360" />
//           <button>Click me</button>
//       </div>
//   )
// }

// .addEventListener("click", function() {})

// can also put event listeners in html file i react see below 




/* <html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div onclick="myFunction()" id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html> */