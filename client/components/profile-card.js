import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

const ProfileCard = () => (
  <Card style={{ width: "30vw", height: "auto", marginTop: "3vh" }}>
    <img
      src="https://images.unsplash.com/photo-1614154760213-3615cfe15525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
      style={{ height: "38vh" }}
    ></img>

    <Card.Content style={{ fontSize: "1.5rem" }}>
      <div style={{ textAlign: "end" }}>
        <Button icon style={{ backgroundColor: "transparent" }}>
          <Icon name="edit" size="large" />
        </Button>
      </div>
      <p
        style={{
          fontSize: "2.1rem",
          textAlign: "center",
          padding: "0px",
        }}
      >
        Full Name
      </p>
      <Card.Meta>
        <span className="age">Age</span>
      </Card.Meta>
      <Card.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ProfileCard;
