import React from "react";
import { connect } from "react-redux";

export class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello</div>;
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    // fetchEntries: () => dispatch(fetchEntries()),
  };
};

export default connect(mapState, mapDispatch)(UserHome);
