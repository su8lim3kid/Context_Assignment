import React from "react";


const UserContext = React.createContext();


export const AccountConsumer = UserContext.Consumer;
class UserProvider extends React.Component {
  state = {
    username: "Dude",
    dateJoined: "12/19/19",
    membershipLevel: "Gold",
    updateUser: (value) => this.updateUser(value),
  };

  updateUser = (value) =>{
    this.setState({ ...value, })
  }
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}


export default UserProvider;