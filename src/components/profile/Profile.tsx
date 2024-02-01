import  React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType, ProfilePageType, RootStateType} from '../../redux/state';



export type ProfileProps = {
    profilePage: ProfilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // newPostText: string
    dispatch: (action: any) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}

            />
            </div>
    );
};

