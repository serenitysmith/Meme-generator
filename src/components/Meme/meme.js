// * Challenge:
//  * - Create a Meme component.
//  * - Inside the Meme component, render a styled form
//  *   with our 2 inputs and the button.
//  * - Don't worry about adding any functionality yet
//  */
// this is what i did on my own and it works but lesson did it different- see below
/// changed the name 
import React from "react";
import memeData from "./memeData";
import img from "./memeImg.png";
export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")

  const[meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
randomImage: ""
  })

  const [allMemeImages, setAllMemeimages] = React.useState(memeData)
  // add this event handle, when button is clicked, console logs i was clicked
  /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    


    // second challenge, getting words to work with the meme chnage 
  function getMemeImage() {
    // console.log("Clicked")
    const memeArray = memeData.data.memes;
    // above calls the meems arrya from the memeData file and below call math.floor, math.random to call a random meme when button is clicked
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url
   
   // changed set meme img to set meme and put it in a function
// need to get previous meme data to switch it to new meme 
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
   }) )   
   
    // setMeme(memeArray[randomNumber].url)
    // console.log to chck if button is working conole.log, logs random number everytime button is clicked
    // console.log(randomNumber)
    // const url below pulls a random url from array in memeData file
    // const url = memeArray[randomNumber].url;

    // console.log(url)
  }
  return (
  <div>
    <div className="inputs">
      <label>
        <input className="Shutup" defaultValue="Shut up" />
        <input className="take-my" defaultValue="and take my money" />
      </label>
      <br></br>
      {/* // called event below  inside of button*/}

      <button onClick={getMemeImage} className="img-buttton">
        <img src={img} alt="button" className="meme-button"></img>
      </button>

    </div>
    <img src={meme.randomImage } alt="" className="meme--image"></img>
   </div>
  );
}
///hhh

// this is a mouse over event that logs somethign to the console whenever the mouse goes over the picture

// export default function App() {
//     function handleClick() {
//         console.log("I was clicked!")
//     }

//     function handleOnMouseOver() {
//         console.log("MouseOver")
//     }

/**
 * Challenge:
 * Log something to the console when the mouse hovers over the image
 */

//     return (
//         <div className="container">
//             <img
//                 src="https://picsum.photos/640/360"
//                 onMouseOver={handleOnMouseOver}
//             />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }

// export default function Meme() {
//     return (
//         <main>
//             <form className="form">
//                 <input
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button
//                     className="form--button"
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </form>
//         </main>
//     )
// }
