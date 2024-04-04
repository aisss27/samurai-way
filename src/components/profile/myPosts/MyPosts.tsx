import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import {PostType} from '../../../redux/profileReducer';




type MyPostsProps = {
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    // dispatch: (action: any) => void
    newPostText: string
}
export const MyPosts = (props: MyPostsProps) => {

    const onClickAddPostCallback = () => {
        props.addPost();
    }

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    }

    const onClickRemovePostCallback = () => {
        // Implement your remove post logic if needed
    }

    let postsElements = props.posts.map(post =>
        <Post key={post.id} id={post.id} message={post.message} likesScount={post.likesCount}/>
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
                    <button onClick={onClickRemovePostCallback}>Remove Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


