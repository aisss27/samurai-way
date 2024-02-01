import  React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType, ProfilePageType, RootStateType} from '../../redux/state';



export type ProfileProps = {
    profilePage: ProfilePageType
    addPost: (newPostText:string) => void
    updateNewPostText: (newText: string) => void
    // newPostText: string
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            </div>
    );
};

