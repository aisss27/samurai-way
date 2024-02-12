import React from 'react';
import {UserType} from '../../redux/usersReducer';
import styles from './Users.module.css'

type UsersProps = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export const Users = (props: UsersProps) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                followed: true,
                fullName: 'Aisultan Abdykerov',
                status: 'I am boss',
                location: {city: 'Karaganda', country: 'Kazakhstan'}
            },
            {
                id: 2,
                photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                followed: false,
                fullName: 'Arman',
                status: 'I am a boy',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 3,
                photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                followed: true,
                fullName: 'Amina',
                status: 'I am boss too',
                location: {city: 'Almaty', country: 'Kazakhstan'}
            },
            {
                id: 4,
                photoUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
                followed: false,
                fullName: 'Aidos',
                status: 'I am a girl',
                location: {city: 'Almaty', country: 'Kazakhstan'}
            },

        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                          <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

