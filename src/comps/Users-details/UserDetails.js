import {useEffect, useState} from "react";
import {getPost} from "../../services/API";
import {useParams} from 'react-router-dom';
export default function  UserDetails(props) {
    let {id} = useParams()
    let [posts,setPosts] = useState();
    useEffect(() => {
        getPost(id)
            .then(value => {
                setPosts({...value.data}  )
            })
    },[id])
    return(
        <div>
            {
                JSON.stringify(posts)
            }
        </div>
    );
}