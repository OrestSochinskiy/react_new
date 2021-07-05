import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getComment, getPost} from "../../ser/API";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";

export default function Comments(props) {
    let {id} = useParams();
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComment(id).then(value => {
            setComments([...value.data])
        })
    },[id])


    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}