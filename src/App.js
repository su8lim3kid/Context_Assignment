import React from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import styled from 'styled-components'
const App = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div><h1>Home Page!!!</h1></div> }
        />
        <Route
          exact
          path="/user/profile"
          render={ () => <UserProfile /> }
        />
      </Switch>
    </Container>
  </AppContainer>
)

const AppContainer = styled.div`
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  height: 100vh;
  width:100;
`;

export default App;