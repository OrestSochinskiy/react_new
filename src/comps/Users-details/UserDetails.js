import {useEffect, useState} from "react";
import {getPost} from "../../services/API";
import {useParams} from 'react-router-dom';
import Posts from "../Posts/Posts";
export default function  UserDetails(props) {
    let {id} = useParams()
    let [posts,setPosts] = useState([]);
    useEffect(() => {
        getPost(id)
            .then(value => {
                setPosts([...value.data])
            })
    },[id])
    console.log(posts)
    return(
        <div>
            {
                posts.map(value => <Posts key={value.id} item={value}/>)
            }
        </div>
    );
}