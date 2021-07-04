import {Route,Link} from "react-router-dom";

export default function User({item: {name,id}}) {
    return(
        <div>
            {name} -
            <Link to={"/users/" + id}> Posts details</Link>
        </div>
    );
}