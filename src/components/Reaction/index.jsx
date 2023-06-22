import {useDispatch} from 'react-redux';
import { reactionEmoji, actions } from "../../app/features/posts/slicer"

import './style.css';


const Reaction = ({post})=> {
    const dispatch = useDispatch();
    const onAddReactionHandler = (nameEmoji) => {
        dispatch(actions.addReaction({reaction: nameEmoji, postId: post.id}))
    }

    return (
        <div>
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <>
                    <button onClick={(evt) => onAddReactionHandler(name)} className="reaction" key={name}>
                        {emoji}
                    </button>
                    <span>{post.reactions[name]}</span>
                </>
            ) )}
        </div>
    )
}

export default Reaction;