import {useEffect, useState} from "react";
import {getPost} from "../../services/API";
import {useParams} from 'react-router-dom';
export default function  UserDetails2(props) {
    console.log(props);
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

                cdopkscadso


        </div>
    );
}