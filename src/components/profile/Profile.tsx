import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';
import {ProfileContainerProps} from './ProfileContainer';

export type ProfileProps = ProfileContainerProps

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};
    
