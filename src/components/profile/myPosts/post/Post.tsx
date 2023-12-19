import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string
    likesScount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://img.freepik.com/premium-photo/cartoon-student-avatar-modern-line-icon-style_899449-53738.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesScount}
            </div>
        </div>
    )
}

