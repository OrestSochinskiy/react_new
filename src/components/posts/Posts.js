import {useEffect, useState} from "react";
import {getPost} from "../../ser/API";
import {useParams} from "react-router-dom"
import Post from "../Post/Post";
export default function Posts(props) {

    let {id} = useParams();
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost(id).then(value => {
            setPosts([...value.data])
        })
    },[id])


    return(
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
}