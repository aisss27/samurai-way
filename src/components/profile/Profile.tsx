import  React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType} from '../../redux/state';



export type ProfileProps = {
    state: {
        posts: PostType[]
    }
    addPost: (newPostText:string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                posts={props.state.posts}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            </div>
    );
};

