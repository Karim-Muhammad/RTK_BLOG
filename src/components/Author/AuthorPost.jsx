import { useSelector } from "react-redux"
import { selectAllUsers } from "../../app/features/users/slicer"

const AuthorPost = ({userId}) => {
    const users = useSelector(selectAllUsers);

    const user = users.find(user => user.id === +userId);
    const author = user ? user.name : "Unknown Author";

    return (
        <div>
            <p style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>
                    by {author}
                </span>
            </p>
        </div>
    )
}

export default AuthorPost;