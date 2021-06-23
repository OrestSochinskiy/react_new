import React, {useEffect, useState} from "react";
import Comments from "../comments/Commentss";


export default function Comment() {

    let [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsfromServer => {
                setComments(commentsfromServer)
                console.log(comments);
            });
    }, []);


    return (
        <div>
            {
                comments.map(comment => <Comments item={comment}/>)
            }
        </div>
    );
}