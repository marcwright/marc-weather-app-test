import React, { Component } from "react";
import "./styles.css";

class About extends Component {
  state = {
    // Your required states here
  };

  handleChange = (event) => {
    this.setState({ zipcode: event.target.value });
    console.log("Your zip code is" + this.state.zipcode);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Your fetch here
    // Your state updates go under function(json)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>// Display weather information here</p>
          <label>
            Please enter your zip code for the weather:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Get my forecast!" />
        </form>
      </div>
    );
  }
}

export default About;
