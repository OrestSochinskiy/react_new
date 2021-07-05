import {Link} from "react-router-dom";


export default function PostComments({item}) {
    return(
        <div>
            {item.title} - <Link to={'/posts/'+ item.id + '/comments'}>Comments</Link>
        </div>



    );
}