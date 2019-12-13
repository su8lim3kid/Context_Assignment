import React, {} from "react";
import { Card, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";
import styled from 'styled-components'



const User = () => (
 
<UserConsumer>
  {value => (
    
      <Card as={Transparent}>
        <Card.Content>
          <Card.Header>{ value.username }</Card.Header>
          <Card.Meta>
            Date Joined: { value.dateJoined }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Skills: { value.skills }</p>
        </Card.Content>
        <Card.Content>
          <p>Membership Level: { value.membershipLevel }</p>
        </Card.Content>
      </Card>

      )}
      </UserConsumer>
  )
  const Transparent = styled.div`
  background: transparent !important;
`;




export default User;