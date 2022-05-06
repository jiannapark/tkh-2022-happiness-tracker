import React from "react";
import { Card, Icon } from "semantic-ui-react";

const MoodList = () => (
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
);

export default MoodList;
