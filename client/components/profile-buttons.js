import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ProfileButtons = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "7rem",
    }}
  >
    <Button animated="vertical" style={{ fontSize: "1.5rem" }}>
      <Button.Content visible>Follow</Button.Content>
      <Button.Content hidden>
        <Icon name="user" color="blue" />
      </Button.Content>
    </Button>
    <Button animated="vertical" style={{ fontSize: "1.5rem" }}>
      <Button.Content visible>Share</Button.Content>
      <Button.Content hidden>
        <Icon name="share" color="red" />
      </Button.Content>
    </Button>
  </div>
);

export default ProfileButtons;
