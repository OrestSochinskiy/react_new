import {Route,Link} from "react-router-dom";

export default function User({item,item: {name,id}}) {
    return(
        <div>
            {name} -
            {/*<Link to={"/users/" + id}> Users details</Link>*/}
            <Link to={
                {
                    pathname : '/users/' + id ,
                    state : item
                }
            }> Users details</Link>
        </div>
    );
}