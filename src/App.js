import {useEffect, useState} from 'react';
import {getUser, getUsers} from './services/API';
import Users from "./component/users/Users";

export default function App(props) {
    let [user, setUser] = useState( );
    let appFn = (id) => {
        getUser(id).then(value => setUser(value.data))
    }


    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                user && <div> {user.title}</div>
            }
            <hr/>
        </div>
    );
}