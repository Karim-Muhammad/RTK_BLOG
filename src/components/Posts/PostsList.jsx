import {useSelector} from 'react-redux';
import { selectAllPosts } from '../../app/features/posts/slicer';

import PostAuthor from './../Author/AuthorPost';
import TimeAgo from '../Time/TimeAgo';
import Reaction from '../Reaction';
import Post from '../Post';

const PostsList = (props) => {
    // const posts = useSelector(store => store.posts);
    const posts = useSelector(selectAllPosts);

    // better to use callback come from slice you want, because we may need change this in all module manually

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const postsListjsx = orderedPosts.map(post => (
        <Post post={post}/>
    ))

    // console.log(posts)
    // console.log("JSX ",postsListjsx)

    // return (
    //     <div>
    //         {
    //             posts.map(post => (
    //                 <article key={post.id}>
    //                     <h3>{post.title}</h3>
    //                     <p>{post.content.substring(0, 100)}</p>
    //                 </article>
    //             ))
    //         }
    //     </div>
    //     // {postsListjsx}
    // )

    return (
        <section>
            {postsListjsx}
        </section>
    )
}


export default PostsList;