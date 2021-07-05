import {useEffect, useState} from "react";
import User from "../User/User";
import {Link, Route} from "react-router-dom";
import Posts from "../posts/Posts";
import Post from "../Post/Post";

export default function Users(props) {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])


    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Route path={'/users/:id'} component={Posts}/>

        </div>
    );
}