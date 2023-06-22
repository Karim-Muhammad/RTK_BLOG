we can use this approach 1#
```js
const postsSlicer = createSlice({
    name: 'posts',
    initialState: [
        { id: 1, title: 'Learning Redux', content: "I've heard Good things", },
        { id: 2, title: 'Slices...', content: 'the more i say slice, the more i want pizza' },
    ],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        }
    },
})
```

```js
const onSavePostHandler = (evt) => {
        evt.preventDefault();

        if(formData['title'] && formData['content']) {
            dispatch(actions.addPost(formData)) 1#
            
            setFormData({
                title: '',
                content: ''
            })
        }
    }
```

but in this approach we usually show structure of state, and repeat that steps in every component will post to global state

so we need another approach we just send data and do rest for us, then every component will send to global, it just send data, and not structure data and call action etc...


```js
const postsSlicer = createSlice({
    name: 'posts',
    initialState: [
        { id: 1, title: 'Learning Redux', content: "I've heard Good things", },
        { id: 2, title: 'Slices...', content: 'the more i say slice, the more i want pizza' },
    ],
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (formData) => ({
                payload: {
                    id: nanoid(),
                    ...formData
                }

            })
        }
    },
})
```