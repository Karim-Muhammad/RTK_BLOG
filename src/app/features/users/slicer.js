import { createSlice } from '@reduxjs/toolkit';

const usersSlicer = createSlice({
    name: "users",
    initialState: [
        { id: 1, name: "Tolulope John" },
        { id: 2, name: "John Doe" },
        { id: 3, name: "Jane Doe" },
    ],
    reducers: {}
})

export default usersSlicer.reducer;
export const actions = usersSlicer.actions;
export const selectAllUsers = (store) => store.users;


// export const selectUserById = (store, userId) => store.users.find((user) => user.id === userId);
// export const selectPostsByUser = createSelector(
//     [selectAllPosts, (store, userId) => userId],
//     (posts, userId) => posts.filter((post) => post.user === userId)
// );
