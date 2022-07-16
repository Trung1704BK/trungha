import React from "react";

import "./About.css";
import Api from "../Api";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.getItem("token") || "";
    console.log("check", token);
    if (!token) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Api />
      </div>
    );
  }
}

export default About;
