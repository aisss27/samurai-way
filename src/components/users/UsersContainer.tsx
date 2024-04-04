import {AppRootStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from '../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/preloader.svg'
import {Preloader} from '../common/preloader/Preloader';

class UsersContainer extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        const {
            totalUsersCount,
            pageSize,
            currentPage,
            users,
            isFetching,
            follow,
            unfollow,
        } = this.props;

        return <>
            {this.props.isFetching ? <Preloader/> : ''}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                users={users}
                follow={follow}
                unfollow={unfollow}
                isFetching={isFetching}
            />
        </>
    }
}

type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

export let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
          dispatch(setIsFetchingAC(isFetching))
        },
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (UsersContainer)