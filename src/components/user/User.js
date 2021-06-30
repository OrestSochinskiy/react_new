export default function User(props) {
    let {item:user} = props;
    return(
        <div>
            <h1>{user.username}</h1>
            <div>{user.id} - {user.name}</div>
        </div>
    );
}