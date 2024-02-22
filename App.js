// // // // import React,{useState} from 'react'

// // // // export default function App() {
// // // //   const [data,setData]=useState({
// // // //     username:"",
// // // //     password:"",
// // // //     email:"",
// // // //     confirmpassword:"",
// // // //     male:"",
// // // //     female:""
// // // //   })
// // // //   const[finaldata,setFinaldata] = useState([])
// // // //   const{username,password,email,confirmpassword,male,female}=data;
// // // //   const handleChange=(e)=>{
// // // //     setData({
// // // //       ...data,[e.target.name]:e.target.value
// // // //     });
// // // //   };
// // // //   const handleSubmit=(e)=>{
// // // //     e.preventDefault();
// // // //    setFinaldata(data);
// // // //   //  console.log(typeof finaldata)    
// // // //   }
// // // //   return (

// // // //     <div>
// // // //       <p>{finaldata.username} {finaldata.password} {finaldata.email} {finaldata.confirmpassword} </p>
// // // //       <form onSubmit={handleSubmit}>
// // // //       <input type='text' name='username' value={username} placeholder='Enter UserName' onChange={handleChange}/>
// // // //       <input type='password' name='password' value={password} placeholder='Enter Password' onChange={handleChange}/>
// // // //       <input type='email' name='email' value={email} placeholder='Enter email' onChange={handleChange}/>
// // // //       <input type='password' name='confirmpassword' value={confirmpassword} placeholder='Enter Password' onChange={handleChange}/>
// // // //       <select>
// // // //        <option><input type='radio' name='male' value={male} onChange={handleChange}/>Male</option>
// // // //        <option><input type='radio' name='female' value={female} onChange={handleChange}/>Female</option>
// // // //       </select>
// // // //       <input type='submit' value="submit"/>
// // // //       </form>
// // // //     </div>
// // // //   )
// // // // }
// // // // // import React, { useState } from "react";
// // // // // import ReactDOM from "react-dom/client";

// // // // // function FavoriteColor() {
// // // // //   const [color, setColor] = useState("red");
    
// // // // //   return (
// // // // //     <>
// // // // //       <h1>My favorite color is {color}!</h1>
// // // // //       <button
// // // // //         type="button"
// // // // //         onClick={() => setColor("blue")}
// // // // //       >Blue</button>
// // // // //       <button
// // // // //         type="button"
// // // // //         onClick={() => setColor("red")}
// // // // //       >Red</button>
// // // // //       <button
// // // // //         type="button"
// // // // //         onClick={() => setColor("pink")}
// // // // //       >Pink</button>
// // // // //       <button
// // // // //         type="button"
// // // // //         onClick={() => setColor("green")}
// // // // //       >Green</button>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // root.render(<FavoriteColor />);
// // // // // export default App;


import React,{useState} from 'react'

 function App() {
  const [data,setData]=useState(0);
      const{number}=data;

 const handleChange=(e)=>{
        setData({
          ...data,[e.target.name]:e.target.value
        });
      };
      const handleadd=(e)=>{
       let a=10
       a=(a+parseInt(number))
       console.log(a)
       document.getElementById("ok").innerHTML=a
      }
      const handlesub=(e)=>{
        let given=10
        e.preventDefault()
        console.log(given-parseInt(number))
    
      }

  return (
    <div>
      <p id="ok"></p>
       <input type='number' name='number' value={number} placeholder='Enter UserNum' onChange={handleChange}/>
       <button onClick={handleadd}>+</button>
       <button onClick={handlesub}>-</button>
    </div>
  )
  }
export default App;



// // // //You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// // // // Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// // // // Return the number of hills and valleys in nums.

 

// // // // Example 1:

// // // // Input: nums = [2,4,1,1,6,5]
// // // // Output: 3
// // // // Explanation:
// // // // At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
// // // // At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill. 
// // // // At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
// // // // At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
// // // // At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
// // // // At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley. 
// // // // There are 3 hills and valleys so we return 3.
// // // // Example 2:

// // // // Input: nums = [6,6,5,5,4,1]
// // // // Output: 0
// // // // Explanation:
// // // // At index 0: There is no non-equal neighbor of 6 on the left, so index 0 is neither a hill nor a valley.
// // // // At index 1: There is no non-equal neighbor of 6 on the left, so index 1 is neither a hill nor a valley.
// // // // At index 2: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 2 is neither a hill nor a valley.
// // // // At index 3: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 3 is neither a hill nor a valley.
// // // // At index 4: The closest non-equal neighbors of 4 are 5 and 1. Since 4 < 5 and 4 > 1, index 4 is neither a hill nor a valley.
// // // // At index 5: There is no non-equal neighbor of 1 on the right, so index 5 is neither a hill nor a valley.
// // // // There are 0 hills and valleys so we return 0.
 

// // // // Constraints:

// // // // 3 <= nums.length <= 100
// // // // 1 <= nums[i] <= 100

// // import React from 'react'
// // const App = () => {
// // const arr=["react","pythn","node"]
// //   return (
// //     <div>
// //       {
// //       arr.map(
        
// //       )
// //       }
// //     </div>
// //   )
// // }

// // export default App
// import React, { useState } from 'react';

// function App() {
//   const [previousNumber, setPreviousNumber] = useState(0);
//   const [inputValue, setInputValue] = useState('');

//   // other code...

//   return (
//     <div>
//       {/* Your input field */}
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       {/* Your + button */}
//       <button
//         onClick={() => {
//           const newNumber = previousNumber + parseInt(inputValue, 10);
//           setPreviousNumber(newNumber);
//           setInputValue(''); // Clear the input after adding
//         }}
//       >
//         +
//       </button>

//       {/* Display the result */}
//       <p>Result: {previousNumber}</p>
//     </div>
//   );
// }
// export default App