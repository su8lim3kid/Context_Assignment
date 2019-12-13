import React from "react"
import { NavLink, } from "react-router-dom"
import { Menu, } from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider"
import styled from 'styled-components'

const Navbar = () => (
<UserConsumer>
  { value => (
<Menu as={Transparent}>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/user/profile">
      <Menu.Item>
      { value.username }
       </Menu.Item>
    </NavLink>
  </Menu> 
  )}
</UserConsumer>

)

const Transparent = styled.div`
  background: transparent !important;
`;

export default Navbar;