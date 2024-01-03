import  React from 'react';
import s from './Profile.module.css';
import {MyPosts, PostType} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';



export type ProfileProps = {
    posts: PostType[]
}

export const Profile = (props: ProfileProps) => {
    let posts = [
        {id: 1, message: 'Hi, I am Ais', likesCount: 777},
        {id: 2, message: 'New Iphone!!!', likesCount: 123},
        {id: 2, message: 'New Iphone!!!', likesCount: 27},
        {id: 2, message: 'New Iphone!!!', likesCount: 0},
    ]
    return (
        <div>
           <ProfileInfo/>
            <MyPosts posts={props.posts}/>
            </div>
    );
};

