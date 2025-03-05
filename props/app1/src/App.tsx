// // import CustomerView from "./ui/CustomerView"
// import { useState } from "react"
// import Counter from "./ui/Counter"

import { useState } from "react";
// import LightRoom from "./ui/LightRoom";
// import DashboardUi from "./ui/Dashboard";
// import Login from "./ui/Login";
// import SayHi from "./ui/SayHi";

// import LanguageViewComponent from "./ui/LanguageViewComponent"

function App() {
  //---------------------------------------------------------------
  //* refer CustomerView.tsx
  // let customer = [
  //   {
  //     name: 'shanuka',
  //     address: 'colombo',
  //     salary: '2000000'
  //   },
  //   {
  //     name: 'john',
  //     address: 'kandy',
  //     salary: '1500000'
  //   },
  //   {
  //     name: 'sarah',
  //     address: 'galle',
  //     salary: '1800000'
  //   },
  //   {
  //     name: 'mike',
  //     address: 'matara',
  //     salary: '2200000'
  //   },
  //   {
  //     name: 'lisa',
  //     address: 'negombo',
  //     salary: '1900000'
  //   }
  //   ]

  // return (
  //   <div>
  //     <CustomerView 
  //     name={customer[0].name}
  //     address={customer[0].address}
  //     salary={customer[0].salary}
  //     />
  //     <CustomerView 
  //     name={customer[1].name}
  //     address={customer[1].address}
  //     salary={customer[1].salary}
  //     />
  //     <CustomerView 
  //     name={customer[2].name}
  //     address={customer[2].address}
  //     salary={customer[2].salary}
  //     />
  //     <CustomerView 
  //     name={customer[3].name}
  //     address={customer[3].address}
  //     salary={customer[3].salary}
  //     />
  //     <CustomerView 
  //     name={customer[4].name}
  //     address={customer[4].address}
  //     salary={customer[4].salary}
  //     />
  //   </div>
  // )
  //---------------------------------------------------------------

  //---------------------------------------------------------------
  //* refer Counter.tsx
  // const [countNumber, setCountNumber] = useState(0);
  
  // return(
  //   <div>
  //     <button
  //       onClick={() => { setCountNumber(countNumber+1) }}
  //     >Increase Count</button>
  //     <hr/>
  //     <Counter count={countNumber}/>
  //   </div>
  // )
  //---------------------------------------------------------------

  //---------------------------------------------------------------
  //* refer LanguageViewComponent.tsx
  // const languages = ["JavaScript", "Python", "Java", "TypeScript", "C++", "Ruby", "Go", "Swift"]

  // return(
  //   <LanguageViewComponent items={languages}/>
  // )
  //----------------------------------------------------------------

  //----------------------------------------------------------------
  //* refer StudentData
  // const students = [
  //   {
  //     id:1,
  //     name:'smith'
  //   },
  //   {
  //     id:2,
  //     name:'john'
  //   },
  //   {
  //     id:3,
  //     name:'sarah'
  //   }
  // ]

  // return(
  //   <div>
  //     <h1>Parent Component</h1>
  //     <hr />
  //     <ul>
  //       {students.map((student) => (
  //         <li key={student.id}>{student.id} | {student.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  //-----------------------------------------------------------------------

  //-----------------------------------------------------------------------
  //* using boolean value
  // const status = true;
  // if (status) {
  //   return (<h1>Hi Team I'm Available Now!</h1>);
  // } else {
  //   return (<h1>You will have to wait!</h1>);
  // }
  //-----------------------------------------------------------------------

  //-----------------------------------------------------------------------
  //* refer lightRoom 
  // const [switchState, setSwitchState] = useState(false);
  // const buttonName = switchState ? 'switch off' : 'switch on';

  // return(
  //   <div>
  //     <button 
  //       type="button" 
  //       title="button" 
  //       onClick={() => setSwitchState(!switchState)}
  //     >
  //       {buttonName}
  //     </button>
  //     <LightRoom status={switchState}/>
  //   </div>
  // )
  //-----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------
  //* ternary operator refer Login and Dashboard
  // const [loginState,setLoginState] = useState(false);
  // return(
  //   <div>
  //     {loginState?<DashboardUi/>:<Login/>}
  //     {loginState?<button
  //       onClick={()=>setLoginState(false)}
  //       >Logout</button>:<button
  //       onClick={()=>setLoginState(true)}
  //       >Login here</button>
  //     }
  //   </div>
  // )
  //-----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------
  //* advance ternary operation example
  // const [task,setTask] = useState<{status:string, task:string}[]>(
  //   [
  //     {status:'pending', task:'Task 1'},
  //     {status:'complete', task:'Task 2'},
  //     {status:'pending', task:'Task 3'},
  //   ]
  // );

  // const [displayStatus,setDisplayStatus] = useState(true);

  // return(
  //   <>
  //   <div>
  //     <button onClick={()=>setTask([])} >Clear Task</button>
  //     <button onClick={()=>setDisplayStatus(false)}>Hide Task List</button>
  //   </div>

  //   <hr />
  //   {displayStatus? (
  //     <ul>
  //       {task.length>0?(
  //         task.map((temp,index)=><li key={index}>{temp.task}</li>)
  //       ):(
  //         <li>List is Empty</li>
  //       )}
  //     </ul>
  //   ):(
  //     <h1>List is unavailable</h1>
  //   )}
  //   </>
  // );
  //------------------------------------------------------------------------------
  //* props vs state refer SayHi
  // const [status,setStatus] = React.useState(true);
  // return(
  //   <SayHi name={'kamal'} status={true} message={'Hi Team Im,'}/>
  // )
  //----------------------------------------------------------------------------
   
  //------------------------------------------------------------------------------
  //* user input handling
  // const [name,setName] = useState('');
  // return(
  //   <div>
  //     <label htmlFor="">Please enter the name</label><br />
  //     <input type="text" name="textfield" id="" onChange={(text)=>{
  //       setName(text.target.value);
  //     }} />
  //     <hr />
  //     <h1>{name}</h1>
  //   </div>
  // );
  //--------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------\
  //* State to store form data with initial values as empty strings

  // const [formData, setFormData] = useState({
  //   username:'',
  //   password:''
  // });

  // // Event handler for input changes
  // // Uses TypeScript type for onChange event
  // // Updates only the changed field while preserving other values
  // const handleData = (e:React.ChangeEvent<HTMLInputElement>)=>{     
  //   // Spread operator preserves existing form values
  //   // [e.target.name] uses the input's name attribute as the property key
  //   setFormData({...formData,[e.target.name]:e.target.value})
  // }

  // return(
  //   <>
  //   {/* Username input field */}
  //   <div>
  //       <label htmlFor="userName">Username</label><br />
  //       <input type="text" onChange={handleData} name="username" placeholder="ex: abc" />
  //   </div>
  //   <hr />
  //   {/* Password input field */}
  //   <div>
  //     <label htmlFor="password">Password</label><br />
  //     <input type="password" onChange={handleData} name="password" placeholder="ex: 1234" />
  //   </div>
  //   <hr />
  //   {/* Button to log the collected form data */}
  //   <div>
  //     <button
  //       onClick={()=>{
  //         console.log(formData);
  //       }}
  //     >Print Data</button>
  //   </div>
  //   </>
  // );
  //--------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------

  //* State to store selected checkbox values as an array of strings
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // // Event handler for checkbox changes
  // // Takes a React checkbox change event as parameter
  // const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // Destructure the value and checked status from the event target
  //   const { value, checked } = e.target;
    
  //   // Update selected options based on checkbox state:
  //   // - If checked: add the value to the array using spread operator
  //   // - If unchecked: remove the value by filtering the array
  //   setSelectedOptions((prev) => 
  //     checked ? [...prev, value] : prev.filter((item) => item !== value)
  //   );
  // }

  // return (
  //   <>
  //     {/* Checkbox inputs with different programming language options */}
  //     <input type="checkbox" value="java" onChange={handle} /> java <br />
  //     <input type="checkbox" value="php" onChange={handle} /> php <br />
  //     <input type="checkbox" value="c#" onChange={handle} /> c# <br />
  //     <hr />
  //     {/* Display the selected options as a comma-separated string */}
  //     SelectedElements: {selectedOptions.join(", ")}
  //   </>
  // )
  //--------------------------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------------------
  // *State to track the selected gender option
  // const [gender, setGender] = useState<string>("");

  // return(
  //   <>
  //   {/* Male radio button */}
  //   <input 
  //     type="radio" 
  //     name="gender"  // Name attribute groups radio buttons together
  //     value="Male" 
  //     checked={gender==="Male"}  // Controlled component: checked state tied to state variable
  //     onChange={(e)=>{setGender(e.target.value)}}  // Update state when this option is selected
  //   />
  //   Male
  //   <hr />
    
  //   {/* Female radio button */}
  //   <input 
  //     type="radio" 
  //     name="gender"  // Same name ensures only one radio button can be selected at a time
  //     value="Female" 
  //     checked={gender==="Female"}  // Controlled component binding
  //     onChange={(e)=>{setGender(e.target.value)}}  // Update gender state with selected value
  //   />
  //   Female
  //   <hr />
    
  //   {/* Other gender option */}
  //   <input 
  //     type="radio" 
  //     name="gender"  // Maintains the same radio button group
  //     value="Other" 
  //     checked={gender==="Other"}  // Controls checked status based on state
  //     onChange={(e)=>{setGender(e.target.value)}}  // Event handler updates state on selection
  //   />
  //   Other
  //   <br />
  //   <hr />
    
  //   {/* Button to display the selected gender value */}
  //   <button
  //     onClick={()=>{
  //       console.log(gender);  // Output the selected gender to the console
  //     }}
  //   >Print Data</button>
  //   </>
  // )
  //---------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------
  



}


export default App
