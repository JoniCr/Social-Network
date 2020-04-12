import {rerenderDocument} from "../render";


const state = {
    profilePage: {
        posts: [{id: 1, text: 'I just had breakfast'}, {id: 2, text: 'I am not stupid'}],
        newPostText: ''
    },
    messagesPage: {
        dialogues: [{name: 'Evgeniy', userId: 1}, {name: 'Nikita', userId: 2}],
        messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'Hello'}],
    }
};

window.state = state;
export const addPost = () => {
    const post = {id: 3, text: state.profilePage.newPostText};
    state.profilePage.newPostText = '';
    state.profilePage.posts.push(post);
    rerenderDocument(state);
};

export const updateNewPostText = (newText) => {
state.profilePage.newPostText = newText;
rerenderDocument(state);
};

export default state;