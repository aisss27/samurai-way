import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';

import {AppRootStateType, store} from './redux/reduxStore';


export type AppProps = {
    store: {
        getState: () => AppRootStateType;
        dispatch: (action: any) => void;
    };

    // addPost: () => void
    // updateNewPostText: (newText:string) => void
    // newPostText: string
};


function App(props: AppProps) {
const state = props.store.getState();
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path="/profile" render={() => <Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        profilePage={state.profileReducer}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs store={store}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
