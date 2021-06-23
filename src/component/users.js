import {useEffect, useState} from "react";
import User from './user'

export default function Users(props) {

    let [users,setUsers] = useState([]);
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersfromServer => {

                setUsers(usersfromServer)

            })

    },[])
    return(
        <div>
            {
                users.map(user => <User item={user}/>)
            }
        </div>
    );
}