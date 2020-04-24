import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuthorised,
});

const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) {
                return <Redirect to="/login"/>
            }
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

};

export default withAuthRedirect;