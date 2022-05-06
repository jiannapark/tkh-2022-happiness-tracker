import React from "react";
import { Divider, Input, Segment, Icon, List } from "semantic-ui-react";

const MoodSections = () => (
  <Segment
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      width: "45vw",
    }}
  >
    <p style={{ fontSize: "2.3rem", textAlign: "center" }}>
      Ways I Improve My Mood <Icon name="square" basic color="yellow" />
      <Input
        focus
        placeholder="Add to List"
        style={{
          width: "13vw",
          height: "2vh",
          fontSize: "1.8rem",
        }}
      />
    </p>
    <List>
      <div
        style={{
          marginTop: "-30px",
          fontSize: "2.1rem",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "40px",
          height: "25vh",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          contain: "content",
          overflow: "auto",
        }}
      >
        <List.Item>Listen to Music</List.Item>
        <List.Item>Visit Friends</List.Item>
        <List.Item>Playing with Animals</List.Item>
        <List.Item>Play Video Games</List.Item>
        <List.Item>Listen to Music</List.Item>
        <List.Item>Visit Friends</List.Item>
        <List.Item>Playing with Animals</List.Item>
        <List.Item>Play Video Games</List.Item>
      </div>
    </List>

    <Divider section />

    <p style={{ fontSize: "2.3rem", textAlign: "center" }}>
      What Ruins My Mood <Icon name="square" basic color="red" />
      <Input
        focus
        placeholder="Add to List"
        style={{
          width: "13vw",
          height: "2vh",
          fontSize: "1.8rem",
        }}
      />
    </p>

    <List>
      <div
        style={{
          marginTop: "-20px",
          fontSize: "2.1rem",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "40px",
          height: "25vh",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          contain: "content",
          overflow: "auto",
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
  </Segment>
);

export default MoodSections;
