import {useState} from "react";
import {getName} from "../services/API";

export default function Post({item}) {
    let [usersName, setUserName] = useState([]);
    let [flag, setFlag] = useState(false)

    function Click() {
        getName(item.id).then(value => setUserName(value.data))
        setFlag(!flag)
    }

    return (
        <div>
            {
                item.title
            }
            <button onClick={Click}>INFO</button>
            {
                flag && usersName.map(value => <div>{value.name}</div>)
            }
            <hr/>
        </div>
    );
}