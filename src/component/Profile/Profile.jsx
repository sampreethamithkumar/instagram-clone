import React, { Fragment, Component } from "react";
import auth from "../../services/authService";

class Profile extends Component {
  handleLogout = () => {
    auth.logout();

    window.location.reload(false);
  };

  render() {
    return (
      <Fragment>
        <h2>Profile</h2>
        <button className="btn btn--primary" onClick={this.handleLogout}>
          Logout
        </button>
      </Fragment>
    );
  }
}

export default Profile;
