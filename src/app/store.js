import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/slicer';
import usersReducer from './features/users/slicer';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})


export default store