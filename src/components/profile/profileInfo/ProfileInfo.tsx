import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';
import {ProfilePageType} from '../../../redux/profileReducer';
import {UserType} from '../../../redux/usersReducer';


type ProfileInfoProps = {
    profile: UserType
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if(!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    );
};

