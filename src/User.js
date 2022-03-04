import React, {useState} from "react";
import UserTable from "./UserTable";

function User(){

    const [user, setUser] = useState([{name:"Eniyan", age:3, place:"Mirattunilai"}, {name:"Aaru", age:2, place:"Arimalam"}])

    const onClickHandler = () =>{
        setUser([...user, value])
    }
    const value = {
        
    }

    return(
        <div>
            <input type="text" onChange={e => (value.name = e.target.value)} />
            <input type="text" onChange={e => (value.age = e.target.value)}/>
            <input type="text" onChange={e => (value.place = e.target.value)}/>
            <button onClick={onClickHandler}>Add </button>

            <UserTable user={user}/>
            <UserTable user={user}/>
           
        </div>
    )
}
export default User;