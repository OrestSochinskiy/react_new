import {useEffect, useState} from "react";
import User from "../PostUser/PostUser";
export default function Posts(userId) {

    let [posts,setPosts] = useState([]);
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/users/'{userId}'/posts')
            .then(value => value.json())
            .then(postsfromServer => {

                setPosts(postsfromServer)
            })

    },[])
    return(
        <div>
            {
                posts.map(post => <User item={post}/>)
            }
        </div>
    );
}