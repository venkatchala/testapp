import React from 'react';

function UserTable(props){
 

    return(
        <div>
             <table style={{border:"1px solid black"}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                </tr>
                
                {
                    props.user.map((user) =><tr>
                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.place}</td> </tr> )
                    
                }
                
                
            </table>
        </div>
    )
}
export default UserTable;