import {useEffect, useState} from 'react';
import {getPost, getPosts} from './services/API';
import Posts from "./component/users/Users";

export default function App(props) {
    let [post, setPost] = useState( );
    let appFn = (id) => {
        getPost(id).then(value => setPost(value.data))
    }


    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, [])

    return (
        <div>
            <Posts items={posts} appFn={appFn}/>
            <hr/>
            {
                post && <div> {post.title}</div>
            }
            <hr/>
        </div>
    );
}