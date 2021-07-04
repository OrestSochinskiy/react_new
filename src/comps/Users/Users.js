import {useEffect, useState} from "react";
import User from "../User/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../Users-details/UserDetails";
import UserDetails2 from "../UsersDetails2/UserDetails2";

export default function Users() {
    let [users,setUsers]  = useState([ ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
        }
    ,[]);
    return(
        <div>
            {
                users.map(value =>  <User key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>

    );
}