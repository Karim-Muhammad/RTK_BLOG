import AuthorPost from "../Author/AuthorPost";
import Reaction from "../Reaction";
import TimeAgo from "../Time/TimeAgo";

const Post = ({post}) => {
    return (
        <article className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className='postCredit'>
                <AuthorPost userId={post.userId} dateTime={post.date} />
                <Reaction post={post} />
                <TimeAgo timestamp={post.date}/>
            </div>
        </article>
    )
}

export default Post;