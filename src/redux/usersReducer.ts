export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export type ActionsType =
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType

export type FollowActionType = {
    type: typeof FOLLOW;
    userId: number;
};

export type UnfollowActionType = {
    type: typeof UNFOLLOW;
    userId: number;
};

export type SetUsersActionType = {
    type: typeof SET_USERS;
    users: UserType[];
};

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number;
};

export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalUsersCount: number;
};

export type SetIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean;
};


export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        //     followed: true,
        //     fullName: 'Aisultan Abdykerov',
        //     status: 'I am boss',
        //     location: {city: 'Karaganda', country: 'Kazakhstan'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        //     followed: false,
        //     fullName: 'Arman',
        //     status: 'I am a boy',
        //     location: {city: 'Astana', country: 'Kazakhstan'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        //     followed: true,
        //     fullName: 'Amina',
        //     status: 'I am boss too',
        //     location: {city: 'Almaty', country: 'Kazakhstan'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        //     followed: false,
        //     fullName: 'Aidos',
        //     status: 'I am a girl',
        //     location: {city: 'Almaty', country: 'Kazakhstan'}
        // },

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:  action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:{
         return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});

