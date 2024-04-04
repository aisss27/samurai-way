import React from 'react';
import s from './Profile.module.css';
import {Profile} from './Profile';
import axios from 'axios';
import {AppRootStateType} from '../../redux/reduxStore';
import {connect} from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import {UserType} from '../../redux/usersReducer';


export type ProfileContainerProps = {
profile: UserType
}
class ProfileContainer extends React.Component<ProfileContainerProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state:AppRootStateType) => ({
    profile: state.profileReducer.profile
})

let mapDispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);