




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



















