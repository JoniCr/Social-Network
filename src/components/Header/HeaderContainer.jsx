import React from "react";
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    isAuthorised: state.auth.isAuthorised,
    login: state.auth.login,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);