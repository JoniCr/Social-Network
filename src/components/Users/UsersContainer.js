import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleIsFollowingInProgress, unfollow} from './../../redux/users-reducer'
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = page => {
        this.props.getUsers(this.props.pageSize, page);
    };

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChange={this.onPageChange}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFollowingInProgress={this.props.isFollowingInProgress}
                />
            }

        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
});


export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers,
    }),
    withAuthRedirect
)(UsersContainer);
