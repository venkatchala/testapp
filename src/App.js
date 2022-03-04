import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}from 'react'

function App() {
  const [user, setUser] = useState( [{name:"Aarya",adress:"Aranthangi", mobileNumber:98763},{name:"Eniyan", address:"Mirattunilai", mobileNumber:98678},{name:"Aaru", address:"arimalam", mobileNumber:9877},{name:"Athi", address:"arimalam", mobileNumber:9878}])

  const addNewUser = (() => {
       
       setUser([...user,{name:"Amilthini",address:"Aranthangi",mobileNumber:978654}])
  })
   
    

  return (
    <div>
      <button onClick={addNewUser}>Update Me</button>
      <h1>Name List</h1>
      <ul>
        {
          user.map((name) =>  <li>{name.name}</li> )
        }
       
      </ul>
      <h1>User Detail</h1>
      <ul>
        {
          user.filter((place) => place.address === "Mirattunilai" || place.address === "arimalam").map((user) =>  <li>Name:   {user.name} , MobileNumber : {user.mobileNumber}</li>)
        }
       
      </ul><h1>Name List</h1>
      <ul>
        {
          user.map((name) =>  <li>{name.name}</li> )
        }
       
      </ul>

    </div>
  );
}

export default App;
