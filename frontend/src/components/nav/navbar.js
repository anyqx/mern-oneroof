import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-bar'>
          <Link to={"/posts"}>All Posts</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_post"}>Write a Post</Link>
          <button className='logout-button' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>OneRoof</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
