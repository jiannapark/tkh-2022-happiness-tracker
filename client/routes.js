import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
// import PropTypes from 'prop-types'
import { UserHome } from "./components";
import userProfile from "./components/user-profile";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/user" component={UserHome} />
        <Route exact path="/user/profile" component={userProfile} />
        {/* Default fallback below if path not found */}
        <Route component={UserHome} />
        <Route component={userProfile} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // isLoggedIn: !!state.user.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    // loadInitialData() {
    //   dispatch(me())
    // }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
// Routes.propTypes = {
// loadInitialData: PropTypes.func.isRequired,
// isLoggedIn: PropTypes.bool.isRequired
// }
