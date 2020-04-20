import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator()); // we don't dispatch function, we dispatch just string, that says what action we want to do "ADD_POST"
        },
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;