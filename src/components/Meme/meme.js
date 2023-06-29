// * Challenge: 
//  * - Create a Meme component.
//  * - Inside the Meme component, render a styled form
//  *   with our 2 inputs and the button.
//  * - Don't worry about adding any functionality yet
//  */
// this is what i did on my pwn and it works but lesson did it different- see below 

import img from './memeImg.png'
export default function Meme(){
    // add this event handle, whne button is clicked, console logs i was clicked 
    function handleClick() {
        console.log("I was clicked!")
    }
    return(
        <div className='inputs'>
        <label >
           <input className='Shutup' defaultValue="Shut up"/>
           <input className='take-my' defaultValue="and take my money"/>
        </label><br></br>
        {/* // called event below */}
       <button onClick={handleClick}  className='img-buttton'>
           <img src={img} alt='button' className='meme-button'></img>
       </button>
   </div>
  
    )
   
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

       
