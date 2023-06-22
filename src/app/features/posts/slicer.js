import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { sub } from "date-fns";

const reactions = {
    'thumbsUp': 0,
    'wow': 0,
    'awesome': 0,
    'heart': 0,
    'angry': 0,
    'rocket': 0,
    'coffe': 0,
}

export const reactionEmoji = {
    'thumbsUp': '👍',
    'wow': '😲',
    'awesome': '😎',
    'heart': '❤️',
    'angry': '😠',
    'rocket': '🚀',
    'coffe': '☕',
}

const postsSlicer = createSlice({
    name: 'posts',
    initialState: [
        // { id: 1, title: 'Learning Redux', content: "I've heard Good things", date: sub(new Date(), { minutes: 10 }).toISOString() },
        {
            id: 1, title: 'Learning Redux', content: "I've heard Good things", date: new Date().toISOString(),
            reactions
        },
    ],

    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (formData) => ({
                payload: {
                    ...formData,
                    id: nanoid(),
                    date: new Date().toISOString(),
                    reactions
                }
            })
        },

        addReaction: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);

            // console.log(postId)
            // console.log(reaction)
            // console.log(existingPost.reactions)
            // console.log(reactions[reaction])

            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    },
})


export default postsSlicer.reducer;

export const selectAllPosts = (store) => store.posts;

export const actions = postsSlicer.actions;

