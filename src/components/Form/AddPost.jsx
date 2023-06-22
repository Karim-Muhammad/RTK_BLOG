import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
// import { nanoid } from "@reduxjs/toolkit";

import {actions} from './../../app/features/posts/slicer'

const AddPost = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        title: "",
        content: "",
        userId: 0,
    });

    const canSave = Boolean(formData['title']) && Boolean(formData['content']) && Boolean(formData['userId'])

    const changeHandler = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
            // id: nanoid(),
        })
    }

    const onSavePostHandler = (evt) => {
        evt.preventDefault();

        if(canSave) {
            // dispatch(actions.addPost(formData)) 1#
            dispatch(actions.addPost(formData)) // 2# by using prepare function in slice

            setFormData({
                title: '',
                content: ''
            })
        }
    }

    const users = useSelector(store => store.users);


    return (
        <form onSubmit={onSavePostHandler} className="form">
            <label htmlFor="author">Author: </label>
            <select id="author" name='userId' value={formData['userId']} onChange={changeHandler}>
                <option value=""></option>
                {users.map(user => (
                    <option key={user.id} value={user.id} >
                        {user.name}
                    </option>
                ))}
            </select>
            <label htmlFor="title">Title: </label>
            <input id="title" name="title" value={formData['title']} onChange={changeHandler}/>
            <label htmlFor="content">Content: </label>
            <input id="content" name="content" value={formData['content']} onChange={changeHandler}/>
            <button type="submit" disabled={!canSave}>Save Post</button>
        </form>
    )
}


export default AddPost;