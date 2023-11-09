import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={s.posts}>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
            </div>
        </div>
    )
}

