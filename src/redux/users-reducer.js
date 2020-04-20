const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: true}
                    }
                    return user
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: false}
                    }
                    return user
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            };
        default:
            return state
    }
};

export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId => ({type: UNFOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = totalCount => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = boolean => ({type: TOGGLE_IS_FETCHING, boolean});
export default usersReducer;