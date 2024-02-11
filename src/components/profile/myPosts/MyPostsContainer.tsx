import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';





type MyPostsContainerProps = {

}
// export const MyPostsContainer1 = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: StoreType) => {
//                     let state = store.getState();
//                     const onClickAddPostCallback = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     const onChangeCallback = (newText: string) => {
//                         let action = updateNewPostTextActionCreator(newText);
//                         store.dispatch(action);
//                     }
//
//                     return (
//                         <MyPosts posts={state.profilePage.posts}
//                                  addPost={onClickAddPostCallback}
//                                  updateNewPostText={onChangeCallback}
//                                  newPostText={state.profilePage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText,


    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextActionCreator(newText);
            dispatch(action);
        },
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)

export default MyPostsContainer;