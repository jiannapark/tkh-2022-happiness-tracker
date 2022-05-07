import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Divider,
  Icon,
  Card,
  Image,
  List,
  Form,
  TextArea,
} from "semantic-ui-react";

export const UserProfile = () => {
  const [currentBio, SetCurrentBio] = useState("");
  const [guiltyPleasure, setGuiltyPleasure] = useState("");
  const [currentMoodImprovement, setCurrentMoodImprovement] = useState([
    initialList,
  ]);
  const [currentMoodRuin, setCurrentMoodRuin] = useState("");

  const initialList = ["Music", "Pets"];

  const handleKeySubmitBio = (e, input) => {
    if (e.key === "Enter") {
      const handleSubmit = (text) => {
        SetCurrentBio(text);
      };
      handleSubmit(input);
    }
  };
  useEffect(() => {}, [handleKeySubmitBio]);

  const handleKeySubmitGP = (e, input) => {
    if (e.key === "Enter") {
      const handleSubmit = (text) => {
        setGuiltyPleasure(text);
      };
      handleSubmit(input);
    }
  };
  useEffect(() => {}, [handleKeySubmitGP]);

  const handleKeySubmitImproveMood = (e, input) => {
    if (e.key === "Enter") {
      const handleSubmit = (text) => {
        setCurrentMoodImprovement(text);
        return (
          <div>
            <List.Item>{currentMoodImprovement}</List.Item>
          </div>
        );
      };
      handleSubmit(input);
    }
  };
  useEffect(() => {}, [handleKeySubmitImproveMood]);

  const handleKeySubmitRuinMood = (e, input) => {
    if (e.key === "Enter") {
      const handleSubmit = (text) => {
        setCurrentMoodRuin(text);
      };
      handleSubmit(input);
    }
  };
  useEffect(() => {}, [handleKeySubmitRuinMood]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        padding: "0",
        fontFamily: "Amatic SC, cursive",
      }}
    >
      <Card.Group>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40vw",
            height: "auto",
          }}
        >
          <Image
            src="https://react.semantic-ui.com/images/wireframe/white-image.png"
            size="medium"
            bordered
          />
          <Card.Content>
            <Card.Header
              style={{
                fontFamily: "Amatic SC, cursive",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              Full Name
            </Card.Header>
            <Card.Meta
              style={{
                fontFamily: "Amatic SC, cursive",
                textAlign: "center",
                fontSize: "1.8rem",
              }}
            >
              <span>Age</span>
            </Card.Meta>
            <div style={{ marginTop: "20px" }}>
              <Button animated="vertical" style={{ fontSize: "1rem" }}>
                <Button.Content visible>Follow</Button.Content>
                <Button.Content hidden>
                  <Icon name="user" color="blue" />
                </Button.Content>
              </Button>

              <Button animated="vertical" style={{ fontSize: "1rem" }}>
                <Button.Content visible>Share</Button.Content>
                <Button.Content hidden>
                  <Icon name="share" color="red" />
                </Button.Content>
              </Button>
            </div>
          </Card.Content>
          <Form>
            <TextArea
              placeholder="Enter Bio"
              onKeyDown={(e) => handleKeySubmitBio(e, e.target.value)}
              style={{ height: "8vh" }}
            />
          </Form>
          <Card.Description
            style={{
              height: "5vw",
              width: "30vw",
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: "0.1px",
              margin: "20px",
            }}
          >
            {currentBio}
          </Card.Description>
          <Input
            placeholder="Guilty Pleasure"
            onKeyDown={(e) => handleKeySubmitGP(e, e.target.value)}
          />
          <Card.Description
            style={{
              height: "3vw",
              width: "30vw",
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: "0.1px",
              margin: "20px",
            }}
          >
            {guiltyPleasure}
          </Card.Description>
        </Card>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40vw",
          }}
        >
          <div style={{ width: "30vw" }}>
            <div>
              <p style={{ fontSize: "2.5rem", textAlign: "center" }}>
                Ways I Improve My Mood{" "}
                <Icon name="square" basic color="yellow" />
              </p>
              <Input
                placeholder="Add to List"
                onKeyDown={(e) => handleKeySubmitImproveMood(e, e.target.value)}
              />{" "}
            </div>

            <List style={{ fontSize: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "start",
                  gap: "20px",
                  contain: "content",
                  overflow: "auto",
                  height: "20vw",
                  width: "30vw",
                }}
              >
                {currentMoodImprovement.map((item) => {
                  console.log(item);
                  return <List.Item>{item}</List.Item>;
                })}
                {/* <List.Item>Last minute work</List.Item>
                <List.Item>Loud noises</List.Item>
                <List.Item>No sleep</List.Item>
                <List.Item>Last minute work</List.Item>
                <List.Item>VIsit family</List.Item>
                <List.Item>Loud noises</List.Item>
                <List.Item>No sleep</List.Item> */}
              </div>
            </List>

            <Divider section />

            <p style={{ fontSize: "2.5rem", textAlign: "center" }}>
              What Ruins My Mood <Icon name="square" basic color="red" />
              {/* <Input focus placeholder="Add to List" /> */}
            </p>

            <List style={{ fontSize: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "start",
                  gap: "20px",
                  contain: "content",
                  overflow: "auto",
                  height: "20vw",
                  width: "30vw",
                }}
              >
                <List.Item>Last minute work</List.Item>
                <List.Item>VIsit family</List.Item>
                <List.Item>Loud noises</List.Item>
                <List.Item>No sleep</List.Item>
                <List.Item>Last minute work</List.Item>
                <List.Item>VIsit family</List.Item>
                <List.Item>Loud noises</List.Item>
                <List.Item>No sleep</List.Item>
              </div>
            </List>
          </div>
        </Card>
      </Card.Group>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "3vh",
              }}
            >
              <Icon name="square" basic color="yellow" size="big" />
              Today's Mood
            </Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "3vh",
              }}
            >
              <Icon name="square" basic color="blue" size="big" />
              Weekly Average Mood
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
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
