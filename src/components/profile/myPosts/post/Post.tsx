import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://img.freepik.com/premium-photo/cartoon-student-avatar-modern-line-icon-style_899449-53738.jpg"
                alt=""/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

