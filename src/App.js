import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = props => {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="page-container">
                <NavBar/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
    )
};

export default App;
