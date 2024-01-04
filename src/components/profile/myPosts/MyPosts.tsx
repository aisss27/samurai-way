import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import {addPost, PostType} from '../../../redux/state';

type MyPostsProps = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}
export const MyPosts = (props: MyPostsProps) => {
    const [newPostText, setNewPostText] = React.useState<string>('');
    const onClickAddPostCallback = () => {
        if(newPostText.trim() !== ''){
            props.addPost(newPostText);
            setNewPostText('');
        }
    }

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value)
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
                    <textarea onChange={onChangeCallback} value={newPostText}></textarea>
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

