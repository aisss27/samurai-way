import  React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType} from '../../redux/state';



export type ProfileProps = {
    state: {
        posts: PostType[]
    }
    addPost: (postMessage: string) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.state.posts}/>
            </div>
    );
};

