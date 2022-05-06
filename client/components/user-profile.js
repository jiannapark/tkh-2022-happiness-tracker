import React from "react";
import { connect } from "react-redux";
import ProfileCard from "./profile-card";
import ProfileButtons from "./profile-buttons";
import MoodSections from "./mood-sections";
import MoodList from "./mood-list";
import { Container, Input } from "semantic-ui-react";
export const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontFamily: "Amatic SC, cursive",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ProfileCard />
        <ProfileButtons />
        <Container
          style={{
            width: "30vw",
            marginTop: " 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Enter Guilty Pleasure"
            style={{
              width: "30vw",
              marginTop: " 10px",
            }}
          />
          <div
            style={{
              marginTop: "10px",
              height: "8vh",
              fontSize: "1.3rem",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "2.5vh",
        }}
      >
        <MoodSections />
        <MoodList />
      </div>
    </div>
  );
};

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

export default connect(mapState, mapDispatch)(UserProfile);
