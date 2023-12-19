import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';

export const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, I am Ais', likesCount: 777},
        {id: 2, message: 'New Iphone!!!', likesCount: 123},
        {id: 2, message: 'New Iphone!!!', likesCount: 27},
        {id: 2, message: 'New Iphone!!!', likesCount: 0},
    ]
    let postsElements = posts.map(posts =>
        <Post key={posts.id} id={posts.id} message={posts.message} likesScount={posts.likesCount}/>
    );
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postsForm}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <div>
                    <button>Remove Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

