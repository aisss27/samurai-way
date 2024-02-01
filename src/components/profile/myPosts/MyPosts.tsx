import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import { PostType} from '../../../redux/state';

type MyPostsProps = {
    posts: PostType[]
    addPost: (newPostText:string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
export const MyPosts = (props: MyPostsProps) => {



    const onClickAddPostCallback = () => {
            props.addPost(props.newPostText);
    }

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
    }

    const onClickRemovePostCallback = () => {

    }

    let postsElements = props.posts.map(posts =>
        <Post key={posts.id} id={posts.id} message={posts.message} likesScount={posts.likesCount}/>
    );
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postsForm}>
                <div>
                    <textarea onChange={onChangeCallback} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickAddPostCallback}>Add Post</button>
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

