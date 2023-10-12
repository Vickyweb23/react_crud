// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [isShuffled, setIsShuffled] =useState(false);
// // const [shuffle , setShuffle]= useState(true);
//   const increment = () => {
//     if(count<27){
//     setCount(count + 5);
//   }
//   };

//   const decrement = () => {
//     if (count >=-27) {
//       setCount(count -7);
//     }
//     // if(shuffle < -29){
//     // setShuffle(shuffle-5);}
//   };

  
//   const shuffle=()=>{

//     setIsShuffled(!isShuffled);
//   };

//   // const  shufle =()=>{

//   //   if(shufle){
//   //     setShufle()
//   //   }
//   // }

//   return (
    


// <div className='viu'>
//   <h1>count is : {count}</h1>
  

// { isShuffled  ? 
// (
//   <div >
// <button onClick={increment}>+</button>
// <button onClick={decrement}>-</button>
// {/* <input
//         type="number"
//         value="input"
        
//       /> */}
//       </div>
// ): (
//   <div>
    
// <button onClick={decrement}>-</button>

//   <button onClick={increment}>+</button>
//   {/* <input
//         type="text"
  
//       /> */}
//       </div>
// )} 
// <button onClick={shuffle}>shuffle</button>
// </div>



//   );
// }

// export default Counter;






// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [isShuffled, setIsShuffled] = useState(false);
// const [color, setColor] = useState({

//   backgroundColor:"blue",
// });
 
// const handleClick=()=>{
//   setColor({

// backgroundColor:"red",

//   });
// };

//   const increment = () => {
//     if (count < 29) {
//       setCount(count + 5);
//     }
//     else{
//       setCount(27)
//     }
//   };
//   const decrement = () => {
//     if (count > -25) {
//       setCount(count - 7);
//     }
//     else{
//       setCount(-27);
//     }
//     };

//   const shuffle = () => {
//     setIsShuffled(!isShuffled);

//   };

//   return (
//     <div className='viu'>
//       <h1>Count is: </h1>

//       {isShuffled ? (
//         <div> 
//           <button onClick={increment}   >+</button>
//           <button onClick={decrement}>-</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={decrement}>-</button>
//           <button onClick={increment}  >+</button>
//         </div>
//       )}

// <input type='name' value={count} />
// <button style={color}   onClick={() => handleClick()}>   99</button>
//       <button onClick={shuffle} >Shuffle</button>
//     </div>
//   );
// }

// export default Counter;

  //  last corrrectly for the code


  // ----------------------


// import React, { useState } from 'react';

// function Fakeable() {
//   const [defining, setDefining] = useState(0);
//   const [split, setSplit] = useState(false);

//   const increment = () => {
//     if (defining < 25) {
//       setDefining(defining + 7);
//     } else {
//       setDefining(27);
//     }
//   };

//   const decrement = () => {
//     if (defining > -25) {
//       setDefining(defining - 7);
//     } else {
//       setDefining(-27);
//     }
//   };

//   const shuffle = () => {
//     setSplit(!split);
//   };

//   return (
//     <div>
//       {split ? (
//         <div>
//           <button onClick={increment}>+</button>
//           <button onClick={decrement}>-</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={decrement}>-</button>
//           <button onClick={increment}>+</button>
//         </div>
//       )}
//       <div>
//         <input type="text" value={defining} />
//         <button onClick={shuffle}>shuffle</button>
//       </div>
//     </div>
//   );
// }

// export default Fakeable;








import React, { useState }  from 'react';
import  './index.css'
function Fakeable (){
  const [defining, setDefining] = useState(0);
const [split, setSplit] = useState(false);
const [color,setColor] = useState ({ 
backgroundColor:"blue",
});

const handleClick =()=>{
setColor({
  backgroundColor:"red",
});

};

const increment = ()=>{

  if (defining < 25){
  setDefining(defining  +7);
}
else{
  setDefining(27)
}}

const decrement =()=>{

  if (defining>-25){
  setDefining(defining  -7);
}
else{
  setDefining(-27)
}
}

const shuffle = () => {
setSplit(!split);

}

return (
  <div className='flex-content'>
      {split ? (
        <div>
          <button onClick={increment}>+</button>
          <input type="text" value={defining} />
 
          <button onClick={decrement}>-</button>

        </div>
      ) : (
        <div>
          <button onClick={decrement}>-</button>
          <input type="text" value={defining} />

          <button onClick={increment}>+</button>

        </div>
      )}
      <div>


        <button onClick={shuffle}>shuffle</button>
<button style={color} onClick={() => handleClick()}>colorButton</button>
      </div>
    </div>
);
}
export default Fakeable;









// import React, { useState } from 'react';

// function Fakeable() {
//   const [defining, setDefining] = useState(0);
//   const [split, setSplit] = useState(false);

//   const increment = () => {
//     if (defining < 25) {
//       setDefining(defining + 7);
//     } else {
//       setDefining(27);
//     }
//   };

//   const decrement = () => {
//     if (defining > -25) {
//       setDefining(defining - 7);
//     } else {
//       setDefining(-27);
//     }
//   };

//   const shuffle = () => {
//     setSplit(!split);
//   };

//   return (
//     <div>
//       {split ? (
//         <div>
//           <button onClick={increment}>+</button>
//           <button onClick={decrement}>-</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={decrement}>-</button>
//           <button onClick={increment}>+</button>
//         </div>
//       )}
//       <div>
//         <input type="text" value={defining} />
//         <button onClick={shuffle}>shuffle</button>
//       </div>
//     </div>
//   );
// }

// export default Fakeable;



















