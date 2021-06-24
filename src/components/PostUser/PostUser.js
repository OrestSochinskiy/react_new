import Posts from "../Posts/Posts";

export default function User(props) {
    let {item:user} = props;
    return(
        <div>

            <div>{user.id} - {user.name}</div>
            <div><Posts({user.id})></div>

        </div>
    );
}