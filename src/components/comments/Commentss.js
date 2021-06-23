import ('./comments.css')

export default function Comments(props) {
    let {item: comment} = props;

    return (
        <div>
            <h1>{comment.name}</h1>
                <div>{comment.id} - {comment.postId} - {comment.email} - {comment.body}</div>

        </div>
)
}