import React from "react"
import { NavLink, } from "react-router-dom"
import { Menu, } from "semantic-ui-react"
import { AccountConsumer, } from "../providers/UserProvider"

const Navbar = () => (
<AccountConsumer>
  { value => (
<Menu>
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
</AccountConsumer>

)

export default Navbar;