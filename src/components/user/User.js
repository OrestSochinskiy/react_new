import {useState} from "react";
import {getPost} from "../services/API";


export default function User(props) {
    let {item} = props;

        let [idPosts,setIdPosts] = useState([]);

        const [flag, setFlag]=useState(false)

        function clik (){

            getPost(item.id).then(value => setIdPosts(value.data))
            setFlag(!flag);
        }
    return(
        <div>
            <h1>{item.username}</h1>
            <div>{item.id} - {item.name}</div>
            <button onClick={clik}>INFO</button>

            {
               flag && idPosts.map(value => <div>{value.userId}--{value.title}</div>)
            }
            <hr/>
        </div>
    );
}