import React from 'react';
import styles from './Users.module.css';
import { UserType } from '../../redux/usersReducer';
import userPhoto from '../../assets/images/avatar.webp';
import {NavLink} from 'react-router-dom';

type UsersProps = {
    onPageChanged: (pageNumber: number) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    users: UserType[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    isFetching: boolean
};

let Users: React.FC<UsersProps> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => (
                    <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                    >
            {p}
          </span>
                ))}
            </div>
            {props.users.map((u: UserType) => (
                <div key={u.id}>
          <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
              <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt=""
              />
                    </NavLink>
            </div>
            <div>
              {u.followed ? (
                  <button
                      onClick={() => {
                          props.unfollow(u.id);
                      }}
                  >
                      Unfollow
                  </button>
              ) : (
                  <button
                      onClick={() => {
                          props.follow(u.id);
                      }}
                  >
                      Follow
                  </button>
              )}
            </div>
          </span>
                    <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {u.location && (
                  <div>{u.location.city}</div>
              )}
                {u.location && (
                    <div>{u.location.country}</div>
                )}
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
