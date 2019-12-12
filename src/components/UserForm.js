import React from "react"
import { Form, } from "semantic-ui-react"
import { AccountConsumer, } from "../providers/UserProvider"

class UserForm extends React.Component {
  state = { 
    username: this.props.username, 
    membershipLevel: this.props.membershipLevel, 
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const user = { ...this.state, };
    this.props.updateUser(user);
  }
  
  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}
const ConnectedUserForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <UserForm 
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateUser={value.updateUser}
        />
      )}
    </AccountConsumer>
  )
}
const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];



export default ConnectedUserForm;