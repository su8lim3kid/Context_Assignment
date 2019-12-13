import React from "react";


const UserContext = React.createContext();


export const UserConsumer = UserContext.Consumer;
class UserProvider extends React.Component {
  state = {
    username: "Nikola Tesla",
    dateJoined: "04/25/1891",
    skills: "Developer of Alternating Current, Mad Scientist!",
    membershipLevel: "Platinum",
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