import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

export const rerenderDocument = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
};