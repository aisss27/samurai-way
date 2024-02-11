import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';

export type ProfileProps = {

}

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

