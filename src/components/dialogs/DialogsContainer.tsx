import s from './Dialogs.module.css'
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';





let mapStateToProps = (state: AppRootStateType) =>
{
    return {
        dialogsPage: state.dialogsReducer,


    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
            updateNewMessageBody: (body:string) => {
                dispatch(updateNewMessageBodyActionCreator(body))
            },
            sendMessage: () => {
               dispatch(sendMessageActionCreator())
            },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);


export default DialogsContainer;