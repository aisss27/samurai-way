import {AppRootStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/usersReducer';

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersReducer.users


    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)

export default UsersContainer;