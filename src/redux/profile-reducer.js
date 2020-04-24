import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [{id: 1, text: 'I just had breakfast'}, {id: 2, text: 'I am not stupid'}],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, text: text}]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

};


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = text => (
    {type: UPDATE_NEW_POST_TEXT, text: text});

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

//thunks

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
};


export default profileReducer;