import React from "react";
import { Card, } from "semantic-ui-react";

const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Membership Level: membershipLevel</p>
    </Card.Content>
  </Card>
)

export default User;