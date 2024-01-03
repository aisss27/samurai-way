import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsProps = {
    posts: PostType[]
}
export const MyPosts = (props: MyPostsProps) => {

    let postsElements = props.posts.map(posts =>
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

