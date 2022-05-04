import React, { useState } from 'react';
import './CreatePosts.css'
const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry)
        props.PostCreate(newEntry)
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                    <label>Post</label>
                    <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
            <div/>
                    <list>
                    <button type='submit'>Create</button>
                    </list>
            </div>
        </form>

    )
}

export default CreatePost;