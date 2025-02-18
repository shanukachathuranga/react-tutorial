// // import CustomerView from "./ui/CustomerView"
// import { useState } from "react"
// import Counter from "./ui/Counter"

import { useState } from "react";
import LightRoom from "./ui/LightRoom";

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
  const [switchState, setSwitchState] = useState(false);
  const buttonName = switchState ? 'switch off' : 'switch on';

  return(
    <div>
      <button 
        type="button" 
        title="button" 
        onClick={() => setSwitchState(!switchState)}
      >
        {buttonName}
      </button>
      <LightRoom status={switchState}/>
    </div>
  )

}

export default App
