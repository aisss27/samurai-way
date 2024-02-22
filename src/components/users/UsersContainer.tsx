import {AppRootStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from '../../redux/usersReducer';
import Users from './Users';

export let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

export let mapDispatchToProps = (dispatch: Dispatch) =>
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)

export default UsersContainer;