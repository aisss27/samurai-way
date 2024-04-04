import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

export const Preloader = () => {
    return (
        <div style={ {backgroundColor: 'white'} }>
            <img alt={''} src={preloader}/>
        </div>
    );
};

