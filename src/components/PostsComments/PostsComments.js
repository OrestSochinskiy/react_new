import {useEffect, useState} from "react";
import PostComments from "../PostComments/PostComments";
import {Route} from "react-router-dom";
import Comments from "../Comments/Comments";

export default function PostsComments(props) {

    let [posts,setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
        })
    },[])
    return(
        <div>
            {
                posts.map(value => <PostComments key={value.id} item={value}/>)
            }
            <Route path={'/posts/:id'} component={Comments}></Route>
        </div>
    );
}
